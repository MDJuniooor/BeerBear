from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.views import APIView
from math import sin, cos, sqrt, atan2, radians

from .models import BeerShop, Stamp, BeerShopReview
from .serializers import (
    BeershopSerializer, BeershopDetailSerializer,
    FeedUserSerializer, BeerShopReviewSerializer
    )
from beers.models import Beer
from users.models import BeerBearCustomer, BeershopOwner

###########################
# BeershopMangeController #
###########################


# 2. 주변 BeerShop 조회
class getNearbyBeerShop(APIView):

    # getNearbyBeerShop ( controller -> Beershop )
    def get(self, request, format=None):
        beershopList = BeerShop.objects.all()
        lat1 = radians(float(request.GET["lat"]))
        lon1 = radians(float(request.GET["lon"]))
        # getNearbyBeerShopList (Beershop self Message)
        nearshopList = self.getNearbyBeerShopList(lat1, lon1, beershopList)

        serializer = BeershopSerializer(nearshopList, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def getNearbyBeerShopList(self, lat1, lon1, beershopList):
        R = 6373.0
        nearshopList = []

        for beershop in beershopList:
            lat2 = radians(beershop.latitude)
            lon2 = radians(beershop.longitude)
            dlon = lon2 - lon1
            dlat = lat2 - lat1
            a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
            c = 2 * atan2(sqrt(a), sqrt(1 - a))
            distance = R * c
            # if loop distance < 500m (Beershop self)
            if distance < 5:
                nearshopList.append(beershop)
        return nearshopList


class getBeerShopInfo(APIView):
    # getBeerShopInfo ( controller -> Beershop)
    def get(self, request, beerShop_id, format=None):
        # getBeerShopInfo ( Beershop self)
        beershop = self.getBeerShopInfo(beerShop_id)
        serializer = BeershopDetailSerializer(beershop)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def getBeerShopInfo(self, beerShop_id):

        return get_object_or_404(BeerShop, pk=beerShop_id)

# 3. 해당 맥주 판매 BeerShop 조회
class getBeershopSearch(APIView):
    # getBeershopSearch ( controller -> Beershop)
    def get(self, requset, beer_id, format=None):
        # getBeerShopSellingBeer (Beershop -> Beer)
        beerShopList = self.getBeerShopSellingBeer(beer_id)
        serializer = BeershopSerializer(beerShopList, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def getBeerShopSellingBeer(self, beer_id):
        beer = get_object_or_404(Beer, pk=beer_id)
        beerShopList = BeerShop.objects.filter(beer_list__in=[beer])
        return beerShopList

# 4. BeerShop 단골 설정

class BeerShopFavorite(APIView):
    # getBeerShopFavoriteInfo (유스케이스에 없음)
    def get(self, request, beerShop_id, format=None):
        beershop = get_object_or_404(BeerShop, pk=beerShop_id)
        customerList = beershop.favorite_user_list.all()
        serializer = FeedUserSerializer(customerList, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    # submitBeerShopFavorite (controller -> Beershop)
    def post(self, request, beerShop_id, format=None):
        customer = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        beershop = get_object_or_404(BeerShop, pk=beerShop_id)
        # checkFavoritestatus (Beershop -> BeerBearCustomer)
        check = BeerBearCustomer.checkFavoriteBeerShopstatus(
            customer, beershop)
        if check:
            # deleteFavoriteList (Beershop self)
            BeerShop.deleteFavoriteUser(beershop, customer)
            beershop.deleteFavoriteUser(customer)
        else:
            # addFavoriteList (Beershop self)
            BeerShop.addFavoriteUser(beershop, customer)
        return Response(status=status.HTTP_200_OK)

# 5. BeerShop Review 조회 및 관리

class getBeerShopReview(APIView):
    # getBeerShopReview ( controller -> BeerShop)
    def get(self, request, beerShop_id, format=None):
        beershop = get_object_or_404(BeerShop, pk=beerShop_id)
        # getBeerShopReviewList ( BeerShop -> BeerShopReview)
        reviewList = BeerShop.getBeerShopReviewList(beershop)
        serializer = BeerShopReviewSerializer(reviewList, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

class createBeerShopReview(APIView):
    # createBeerShopReview(controller -> BeerShop)
    def post(self, request, beerShop_id, format=None):
        user = request.user
        # user 인증 체크
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beerShop = get_object_or_404(BeerShop, pk=beerShop_id)
            # createBeerShopReview (BeerShop -> BeerShopReview)
            response = self.createBeerShopReview(beerShop, user, request.data)
            return response

    def createBeerShopReview(self, beerShop, user, data):
        serializer = BeerShopReviewSerializer(data=data)
        if serializer.is_valid():
            serializer.save(creator=user, beershop=beerShop)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class deleteBeerShopReview(APIView):
    # deleteBeerShopReview (controller -> BeerShop)
    def delete(self, request, beerShop_id, review_id, format=None):
        user = request.user
        beershop = get_object_or_404(BeerShop, pk=beerShop_id)
        # deleteBeerShopReview ( BeerShop -> BeershopReview)
        response = self.deleteBeerShopReview(review_id, beershop, user)
        return response

    def deleteBeerShopReview(self, review_id, beershop, user):
        beershop_review = get_object_or_404(BeerShopReview, pk=review_id,  beershop=beershop)
        if beershop_review.creator == user:
            beershop_review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
       
class createBeerShopReviewWithParent(APIView):
    # createBeerShopReviewWithParent(controller -> BeerShop)
    def post(self, request, beerShop_id, parent_id, format=None):
        user = request.user
        # user 인증 체크
        if not user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            beerShop = get_object_or_404(BeerShop, pk=beerShop_id)
            # createBeerShopReview (BeerShop -> BeerShopReview)
            response = self.createBeerShopReviewWithParent(beerShop, parent_id ,user, request.data)
            return response

    def createBeerShopReviewWithParent(self, beerShop, parent_id, user, data):
        serializer = BeerShopReviewSerializer(data=data)
        parent = get_object_or_404(BeerShopReview, pk=parent_id)
        if serializer.is_valid():
            serializer.save(creator=user, beershop=beerShop, parent=parent)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


