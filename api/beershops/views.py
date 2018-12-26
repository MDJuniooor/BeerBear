from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from math import sin, cos, sqrt, atan2, radians

from .models import BeerShop, Stamp
from .serializers import BeershopSerializer, BeershopDetailSerializer, FeedUserSerializer
from beers.models import Beer
from users.models import BeerBearCustomer,BeershopOwner

class BeershopListCreateAPIView(APIView):

    def get(self, request, format=None):
        queryset = BeerShop.objects.all()
        serializer = BeershopSerializer(queryset, many=True)

        return Response(serializer.data)


    def post(self, request, format=None):
        owner = get_object_or_404(BeershopOwner,pk=request.user.pk) 
        serializer = BeershopSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=owner)

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        
        else :
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class BeershopDetailAPIView(APIView):
    
    def get(self, request,pk, format=None):
        beershop = get_object_or_404(BeerShop, pk=pk)
        serializer = BeershopDetailSerializer(beershop)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
        
    def put(self, request, pk, format=None):
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)

        beershop = get_object_or_404(BeerShop, pk=pk)

        if beershop.owner == owner:

            serializer = BeershopDetailSerializer(beershop, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save(owner=owner)
                return Response(data=serializer.data, status=status.HTTP_200_OK)

            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        else :
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
    def delete(self, request, pk, format=None):
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        beershop = get_object_or_404(BeerShop, pk=pk)

        if beershop.owner == owner:
            beershop.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        else :
            return Response(status=status.HTTP_401_UNAUTHORIZED)

class BeershopSearchWithDistanceAPIView(APIView):
    def get(self, request, format=None):
        beershopList = BeerShop.objects.all()
        lat1 = radians(float(request.GET["lat"]))
        lon1 = radians(float(request.GET["lon"]))
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
            if distance < 5:
                nearshopList.append(beershop)
        
        serializer = BeershopSerializer(nearshopList, many=True)
        
        return Response(data=serializer.data,status=status.HTTP_200_OK)


class BeershopSearchWithBeerAPIView(APIView):
    def get(self, request, beer_id ,formant=None):
        beer = get_object_or_404(Beer, pk=beer_id)
        beerShops = BeerShop.objects.filter(beer_list__in=[beer])
        serializer = BeershopSerializer(beerShops, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class BeerShopFavoriteAPIView(APIView):
    def get(self, request, beershop_id, format=None):
        beershop = get_object_or_404(BeerShop, pk=beershop_id)
        userList = beershop.favorite_user_list.all()
        serializer = FeedUserSerializer(userList, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, beershop_id, format=None):
        user = get_object_or_404(BeerBearCustomer, request.user.pk) 
        beershop = get_object_or_404(BeerShop, pk=beershop_id)
        userList = beershop.favorite_user_list.all()
        if user in userList:
            beershop.favorite_user_list.remove(user)
        else:
            beershop.favorite_user_list.add(user)

        return Response(status=status.HTTP_200_OK)

class AddStampAPIView(APIView):
    def post(self, request, customer_pk, format=None):
        customer = get_object_or_404(BeerBearCustomer, pk=customer_pk)
        owner = get_object_or_404(BeershopOwner, pk=request.user.pk)
        beershop = get_object_or_404(BeerShop, owner)
        Stamp.objects.create()
        return Response(status=status.HTTP_201_CREATED)
