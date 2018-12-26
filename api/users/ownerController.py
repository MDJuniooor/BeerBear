from django.core.files import File
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from io import BytesIO

from beershops.serializers import StampSerializer, BeershopSerializer
from beers.serializers import BeerSerializer
from beershops.models import Stamp, BeerShop, BeerShopReview
from beershops.serializers import BeerShopReviewSerializer
from .serializers import UserSerializer, BeerBearCustomerSerializer, CouponSerializer
from .models import User, BeerBearCustomer, BeershopOwner
from coupons.models import Coupon

##########################
# manageBeerShopController #
##########################

# 1. 초기화면
class getMyBeerShop(APIView):
    # getMyBeerShop ( Controller -> B.B Owner)
    def get(self, request, format=None):
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        # getBeerShop (B.B owner -> BeerShop)
        beershop = BeershopOwner.getBeerShop(owner)
        serializer = BeershopSerializer(beershop)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


# 2. 생략

# 3. 고객 리뷰 관리
class getMyBeerShopReview(APIView):
    # getMyBeerShopReview ( Controller- > B.B Owner)
    def get(self, request, format=None):
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        # getBeerShop (B.B owner -> BeerShop)
        beershop = BeershopOwner.getBeerShop(owner)
        review_list = BeerShop.getBeerShopReviewList(beershop)
        serializer = BeerShopReviewSerializer(review_list,many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class submitBeerShopReviewReply(APIView):
    # submitBeerShopReviewReply ( Controller -> BeershopReview)
    def post(self, request, review_id, formant=None):
        user = request.user
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        # getBeerShop (B.B owner -> BeerShop)
        beershop = BeershopOwner.getBeerShop(owner)
        # createBeerShopReviewReply ( BeerShop -> BeershopReview )
        response = self.createBeerShopReviewReply(beershop, review_id, user, request.data)
        return response

    def createBeerShopReviewReply(self, beerShop, parent_id, user, data):
        serializer = BeerShopReviewSerializer(data=data)
        parent = get_object_or_404(BeerShopReview, pk=parent_id)
        if serializer.is_valid():
            serializer.save(creator=user, beershop=beerShop, parent=parent)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class updateBeerShopReviewReply(APIView):
    # updateBeerShopReviewReply ( Controller -> BeershopReview)
    def put(self, request, review_id, format=None):
        user = request.user
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        # getBeerShop (B.B owner -> BeerShop)
        beershop = BeershopOwner.getBeerShop(owner)
        review = get_object_or_404(BeerShopReview, pk=review_id)
        
        # checkIdentity (Beershop review self)
        check = BeerShopReview.checkIdentity(review, user, beershop)
        if check:
            serializer = BeerShopReviewSerializer(review, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

class deleteBeerShopReviewReply(APIView):
    # deleteBeerShopReviewReply ( Controller -> BeershopReview)
    def delete(self, request, review_id, reply_id, format=None):
        user = request.user
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        # getBeerShop (B.B owner -> BeerShop)
        beershop = BeershopOwner.getBeerShop(owner)
        # deleteBeerShopReview ( BeerShop -> BeershopReview)
        response = self.deleteBeerShopReview(review_id, reply_id, beershop, user)
        return response

    def deleteBeerShopReview(self, review_id, reply_id, beershop, user):
        beershop_review = get_object_or_404(
            BeerShopReview, pk=reply_id, beershop=beershop, parent__id=review_id)
        if beershop_review.creator == user:
            beershop_review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
