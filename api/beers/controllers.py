import django_filters.rest_framework
from django.contrib.auth import get_user_model
from django.db.models import Q
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import BeerBearCustomer, User
from .models import Beer, BeerReview
from .serializers import BeerSerializer, BeerReviewSerializer, FeedUserSerializer
from collections import defaultdict
from .recommend import recommendBeerList 

######################
# Beer controller    #
######################

# 2. 맥주 검색
class getBeerWithKeyword(APIView):
    # getBeerWithKeyword ( controller -> Beer)
    def get(self, request, format=None):
        query = request.GET.get("q")
        # getBeerWithKeyword ( Beer self )
        beer_list = self.getBeerWithKeyword(query)
        serializer = BeerSerializer(beer_list, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def getBeerWithKeyword(self, query):
        if query:
            queryset_list = Beer.objects.filter(
                Q(name__icontains=query) |
                Q(style__icontains=query) |
                Q(country__icontains=query)
            ).distinct()
            return queryset_list
        else:
            return None


# 3. 맥주 추천
class recommendBeer(APIView):
    # recommendBeer ( controller -> B.B Customer )
    def get(self, request, format=None):
        # recommendBeerList ( B.B Customer -> Beer)
        query_list = recommendBeerList(request.user.id)
        beer_list = Beer.objects.filter(ref__in=query_list)
        serializer = BeerSerializer(beer_list, many=True)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)

# 4. 맥주 정보 확인
class getBeerInfo(APIView):
    # getBeerInfo ( controller -> Beer)
    def get(self, request, beer_id, format=None):
        # getBeerInfo ( Beer self )
        beer = self.getBeerInfo(beer_id)
        serializer = BeerSerializer(beer)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def getBeerInfo(self, beer_id):
        beer = get_object_or_404(Beer, pk=beer_id)
        return beer

class getMoreBeerReview(APIView):
    # getBeerInfo ( controller -> Beer)
    def get(self, request, beer_id, format=None):
        # getBeerReviewList ( Beer -> Beerreview)
        beerReview_list = self.getBeerReviewList(beer_id)
        serializer = BeerReviewSerializer(beerReview_list, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def getBeerReviewList(self, beer_id):
        beer = get_object_or_404(Beer, pk=beer_id)
        beerReview_list = BeerReview.objects.filter(beer=beer)
        return beerReview_list

#### 4.3, 4.4 부분은 beer 3번 부분과 겹쳐서 생략하였음

# 5. 맥주 찜하기 / 평가하기
class beerFavorite(APIView):
    # getBeerFavoriteInfo (no UseCase)
    def get(self, request, beer_id, format=None):
        beer = get_object_or_404(Beer, pk=beer_id)
        customerList = beer.favorite_user_list.all()
        serializer = FeedUserSerializer(customerList, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
   
    # submitBeerFavorite (controller -> Beer)
    def post(self, request, beer_id, format=None):
        customer = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        beer = get_object_or_404(Beer, pk=beer_id)
        # checkFavoritestatus ( Beer -> BeerBearCustomer)
        check = BeerBearCustomer.checkFavoriteBeerstatus(customer, beer)
        if check:
            # deleteFavoriteList (Beer self)
            Beer.deleteFavoriteUser(beer, customer)
        else:
            # addFavoriteList (Beer self)
            Beer.addFavoriteUser(beer, customer)
        return Response(status=status.HTTP_200_OK)


class getBeerReview(APIView):
    # getBeerReview ( controller -> Beer)
    def get(self, request, beer_id, format=None):
        beer = get_object_or_404(Beer, pk=beer_id)
        # getBeerReviewList ( Beer -> BeerReview)
        reviewList = Beer.getBeerReviewList(beer)
        serializer = BeerReviewSerializer(reviewList, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class createBeerReview(APIView):
    # createBeerReview(controller -> Beer)
    def post(self, request, beer_id, format=None):
        user = request.user
        # user 인증 체크
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beer = get_object_or_404(Beer, pk=beer_id)
            # createBeerReview (Beer -> BeerReview)
            response = self.createBeerReview(beer, user, request.data)
            return response

    def createBeerReview(self, beer, user, data):
        serializer = BeerReviewSerializer(data=data)
        if serializer.is_valid():
            serializer.save(creator=user, beer=beer)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class deleteBeerReview(APIView):
    # deleteBeerReview (controller -> Beer)
    def delete(self, request, beer_id, review_id, format=None):
        user = request.user
        beer = get_object_or_404(Beer, pk=beer_id)
        # deleteBeerShopReview ( Beer -> BeerReview)
        response = self.deleteBeerReview(review_id, beer, user)
        return response

    def deleteBeerReview(self, review_id, beer, user):
        beer_review = get_object_or_404(
            BeerReview, pk=review_id,  beer=beer)
        if beer_review.creator == user:
            beer_review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
