from django.core.files import File
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from io import BytesIO

from beershops.serializers import StampSerializer, BeershopSerializer
from beers.serializers import BeerSerializer
from beershops.models import Stamp, BeerShop
from .serializers import UserSerializer, BeerBearCustomerSerializer, CouponSerializer
from .models import User, BeerBearCustomer, BeershopOwner
from coupons.models import Coupon


##########################
# manageMyInfoController #
##########################

# 1. 초기화면
class getMyInfo(APIView):
    # getMyInfo ( Controller -> B.B.C)
    def get(self, request, format=None):
        customer = get_object_or_404(BeerBearCustomer, pk=request.user.id)
        BeerBearCustomer.generate_qrcode(customer)
        serializer = BeerBearCustomerSerializer(customer)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

# 2. 맥주 스탬프 적립 
# 3. 스탬프 12개 적립 쿠폰 자동 발행 - checkStamp에서 실행됨
class addStamp(APIView):
    # addStamp ( Controller -> B.B Owner)
    def post(self, request, customer_id, format=None):
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        #  getBeerShop ( B.B Owner -> BeerShop )
        beershop = BeershopOwner.getBeerShop(owner)
        customer = get_object_or_404(BeerBearCustomer, pk=customer_id)
        # createStamp (BeerShop -> Stamp)
        BeerShop.createStamp(beershop, customer)
        # checkStamp (B.B Customer -> Stamp)
        BeerBearCustomer.checkStamp(customer)
        return Response(status=status.HTTP_200_OK)

# 4. 쿠폰 사용
class getCouponList(APIView):
    # getCouponList (controller -> B.B customer)
    def get(self, request, formant=None):
        customer = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        # get_coupon_list( B.B customer -> Coupon )
        coupon_list = BeerBearCustomer.getCouponList(customer)
        serializer = CouponSerializer(coupon_list, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)   


class getCouponQRcode(APIView):
    # getCouponQRcode ( controller -> Coupon)
    def get(self, request, coupon_id ,format=None):
        coupon = get_object_or_404(Coupon, pk=coupon_id)
        # generate_qrcode
        Coupon.generate_qrcode(coupon)
        serializer = CouponSerializer(coupon)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

######
# 4.3 쿠폰 삭제는 Owner가 쿠폰을 사용하면, 삭제한다.
#####


# 5. My favorite Beer 관리
class getMyBeerList(APIView):
    # getMyBeerList ( controller -> B.B.C )
    def get(self, request, format=None):
        customer = get_object_or_404(pk=request.user.pk)
        # getFavoriteBeerList ( B.B.C -> Beer)
        beer_list = BeerBearCustomer.getFavoriteBeerList(customer)
        serializer = BeerSerializer(beer_list, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


#######
# 5.2 시퀀스 플로우는
# beers.controller에서 beerFavorite에서 함수와 같음
#######

# 6. My favorite BeerShop 관리
class getMyBeerShopList(APIView):
    # getMyBeerShopList ( controller -> B.B.C )
    def get(self, request, format=None):
        customer = get_object_or_404(pk=request.user.pk)
        # getFavoriteBeerShopList ( B.B.C -> BeerShop)
        beershop_list = BeerBearCustomer.getFavoriteBeerShopList(customer)
        serializer = BeershopSerializer(beershop_list, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


######
# 6.2 시퀀스 플로우는
# beershops.controller에서 BeerShopFavorite에서 함수와 같음
######
