from django.core.files import File
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from io import BytesIO

from beershops.serializers import StampSerializer
from beershops.models import Stamp, BeerShop
from .serializers import UserSerializer
from .models import User, BeerBearCustomer,BeershopOwner
from coupons.models import Coupon

class UserProfileAPIView(APIView):
    def get(self, request, format=None):
        user = get_object_or_404(User, pk=request.user.id)
        if user.qr == None:
            qr = user.generate_qrcode()
            blob = BytesIO()
            qr.save(blob, 'JPEG')
            user.qr.save('qrcode_{}.jpeg'.format(user),
                                    File(blob))
        serializer = UserSerializer(user)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)
#   many to many => DB class 만들어 지는데
class QRCodeReadAPIView(APIView):
    def post(self, request,user_pk, format=None):
        owner = get_object_or_404(BeershopOwner, pk=7)
        # owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        beershop = get_object_or_404(BeerShop,owner=owner)
        customer = get_object_or_404(BeerBearCustomer,pk=user_pk)
        stamp = Stamp.objects.create(beershop=beershop,customer=customer)
        stampList = Stamp.objects.filter(customer=customer, is_active=True)
        if len(stampList) == 12:
            Coupon.objects.create(name="스탬프 12개 발행 쿠폰", customer=customer, is_active=True, is_used=True)
            for st in stampList:
                st.is_active = False

        serializer = StampSerializer(stamp)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

