from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, action
from users.models import BeerBearCustomer
from beershops.serializers import BuddyMatchSerializer
from users.serializers import BeerBearCustomerSerializer

class BuddyMatchingAPIView(APIView):

    def get(self, request, format=None): 
        user = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        beershop_list = user.favorite_beershop_list.all()   
        serializer = BuddyMatchSerializer(beershop_list, many=True, context={"request": request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
        
class BuddyMatchingRequestAPIView(APIView):

    def post(self, request, user_pk, format=None):
        user = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        buddy = get_object_or_404(BeerBearCustomer, pk=user_pk)
        user.beerbuddy_send_list.add(buddy)
        serializer = BeerBearCustomerSerializer(user)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
