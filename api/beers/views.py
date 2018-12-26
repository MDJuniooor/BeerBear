import django_filters.rest_framework
from django.contrib.auth import get_user_model
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import BeerBearCustomer
from .models import Beer, BeerReview
from .serializers import BeerSerializer, BeerReviewSerializer, FeedUserSerializer

User = get_user_model()

class BeerViewSet(viewsets.ModelViewSet): 
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'country', 'style')

# UC.1 Beer controller 
class BeerFavoriteAPIView(APIView):
    # searchBeerList
    def get(self, request, beer_id, format=None):
        beer = get_object_or_404(Beer, pk=beer_id)
        userList = beer.favorite_user_list.all()
        serializer = FeedUserSerializer(userList, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
    # addFavoriteBeerList
    def post(self, request, beer_id, format=None):
        user = get_object_or_404(BeerBearCustomer,pk=request.user.pk) 
        beer = get_object_or_404(Beer, pk=beer_id)
        userList = beer.favorite_user_list.all()
        if user in userList:
            beer.favorite_user_list.remove(user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            beer.favorite_user_list.add(user)
            return Response(status=status.HTTP_201_CREATED)
        
# UC.1 Beer controller
class BeerReviewListAPIView(APIView):
    # searchBeerReviewList
    def get(self, request, beer_id, format=None):
        reviews = BeerReview.objects.filter(beer__id=beer_id)
        serializer = BeerReviewSerializer(reviews, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
    # createBeerReview
    def post(self, request, beer_id, format=None):
        user = request.user
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beer = get_object_or_404(Beer, pk=beer_id)
            serializer = BeerReviewSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(creator=user, beer=beer)
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# UC.1 Beer controller
class BeerReviewDetailAPIView(APIView):
    # searchBeerReview
    def get(self, request, beer_id, review_id, format=None):
        user = request.user
        review = get_object_or_404(
            BeerReview, pk=review_id, beer__id=beer_id, creator=user)
        serializer = BeerReviewSerializer(review)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
    # updateBeerReview
    def put(self, request, beer_id, format=None):
        user = request.user
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beer = get_object_or_404(Beer, pk=beer_id)
            serializer = BeerReviewSerializer()
            if serializer.is_valid():
                serializer.save(beer=beer, creator=user)
                return Response(data=serializer.data, status=status.HTTP_200_OK)

            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # deleteBeerReview
    def delete(self, request, pk, format=None):
        user = request.user
        beer = get_object_or_404(Beer, pk=pk)
        beer_review = get_object_or_404(BeerReview, creator=user, beer=beer)
        beer_review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BeerReviewWithParentAPIView(APIView):
    
    def post(self, request, beer_id, parent_id, format=None):
        user = request.user
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beer = get_object_or_404(Beer, pk=beer_id)
            parent = get_object_or_404(
                BeerReview, beer=beer, parent__id=parent_id)
            serializer = BeerReviewSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(creator=user, beer=beer, parent=parent)
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BeerReviewDetailWithParentAPIView(APIView):

    def put(self, requset, beer_id, parent_id, format=None):
        user=requset.user
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beer = get_object_or_404(Beer, pk=beer_id)
            find_review = get_object_or_404(
                BeerReview, beer=beer, parent__id=parent_id, creator=user)
            serializer = BeerReviewSerializer(find_review,data=request.data,partial=True)

            if serializer.is_valid():
                serializer.save(creator=user, beer=beer, parent=parent)
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, requset, beer_id, format=None):
        user = requset.user
        beer = get_object_or_404(Beer, pk=beer_id)
        beer_review = get_object_or_404(BeerReview, creator=user, beer=beer)
        beer_review.delete()        
        return Response(status=status.HTTP_204_NO_CONTENT)



