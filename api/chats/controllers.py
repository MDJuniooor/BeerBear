from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, filters, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, action
from users.models import BeerBearCustomer
from beershops.serializers import BuddyMatchSerializer
from users.serializers import BeerBearCustomerSerializer
from .models import Chat, Message
from .serializers import ChatRoomSerializer, MessageSerializer
from coupons.models import Coupon

########################
# MachingBuddyController
########################

class getBeerBuddyList(APIView):
    # getBeerBuddyList (controller -> BeerBearCustomer)
    def get(self, request, format=None):
        customer = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        # getBeerBuddyList (BeerBeerCustomer self)
        user_list = BeerBearCustomer.getBearBuddyList(customer)        
        serializer = BeerBearCustomerSerializer(user_list, many=True)
        return Response(data=serializer.data ,status=status.HTTP_200_OK)

class getBeerBuddyInfo(APIView):
    # getBeerBuddyInfo ( controller -> BeerBearCustomer)
    def get(self, request, customer_id ,format=None): 

        # getBeerBearCustomerInfo (BeerBearCustomer self)
        customer = self.getBeerBearCustomerInfo(customer_id)
        serializer = BeerBearCustomerSerializer(customer)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def getBeerBearCustomerInfo(self, customer_id):
        return get_object_or_404(BeerBearCustomer, pk=customer_id)

class submitBeerBuddyMatching(APIView):
    # submitBeerBuddyMatching ( controller -> BeerBearCustomer)

    def post(self, request, buddy_id, format=None):
        customer = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        buddy = self.getBearBuddy(buddy_id)

        check = BeerBearCustomer.addBeerBuddyList(customer,buddy)
        print(check)
        if check:
            serializer = BeerBearCustomerSerializer(customer)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    # getBearBuddy ( B.B customer self)
    def getBearBuddy(self, buddy_id):
        return get_object_or_404(BeerBearCustomer, pk=buddy_id  )

class approveBuddyRequest(APIView):
    # approveBuddyRequest (controller -> B.B customer)
    def post(self, request, buddy_id, format=None):
        customer = get_object_or_404(BeerBearCustomer,pk=request.user.pk)
        # approveBuddy ( B.B.C self )
        check = BeerBearCustomer.approveBuddy(customer, buddy_id)
        print(check)
        if check:
            buddy = get_object_or_404(BeerBearCustomer,pk=buddy_id)
            chatroom = self.createChatRoom(customer,buddy)
            response = self.createBuddyCoupons(customer, buddy, chatroom)
            return response
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    # createChatRoom (controller -> Chat)
    def createChatRoom(self,customer,buddy):
        chatroom = Chat.objects.create(is_active=True)
        chatroom.userlist.add(customer, buddy)
        return chatroom

    # createBuddyCoupons (controller -> Coupon)
    def createBuddyCoupons(self,customer,buddy,chatroom):
        coupon1 = Coupon.objects.create(name="친구 매칭 쿠폰", customer=customer, is_active=False, count=0)
        coupon2 = Coupon.objects.create(name="친구 매칭 쿠폰", customer=buddy, is_active=False, count=0)
        # addCoupon ( Chat -> Coupon)
        check = Chat.addCoupon(chatroom, coupon1, coupon2)
        if check:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class getChatRoomList(APIView):
    # getChatRoomList (controller -> B.B.C)
    def get(self, request, format=None):
        customer = get_object_or_404(BeerBearCustomer, pk=request.user.pk)
        chatroom_list = self.getChatRoomList(customer)
        serializer = ChatRoomSerializer(chatroom_list, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    # getChatRoomList (B.B.C -> Chat)
    def getChatRoomList(self, customer):
        return Chat.objects.filter(userlist__in=[customer])

class getChatRoomMessage(APIView):
    # getChatRoomMessage (controller -> Chat)
    def get(self, request, chat_id, format=None):
        message_list = self.getChatRoomMessage(chat_id)
        serializer = MessageSerializer(message_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def getChatRoomMessage(self, chat_id):
        return Message.objects.filter(chatroom__id=chat_id)
    
class submitMessage(APIView):
    # submitMessage (controller -> Chat)
    def post(self, request, chat_id, format=None):
        creator = get_object_or_404(BeerBearCustomer,pk=request.user.pk)
        message = self.submitMessage(creator, chat_id)
        serializer = MessageSerializer(message, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    # submitMessage (Chat -> Message)
    def submitMessage(self, creator, chat_id):
        chatroom = get_object_or_404(Chat, pk=chat_id)
        message = Message.objects.create(creator=creator, chatroom=chatroom)
        return message

class applyBuddyBenefit(APIView):
    # applyBuddyBenefit ( controller -> B.B.C)
    def get(self, request, chat_id, format=None):
        customer = get_object_or_404(BeerBearCustomer,pk=request.user.pk)
        chatroom = get_object_or_404(Chat,pk=chat_id)
        
        if chatroom.is_active == False:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            # getCouponlist ( Chat -> Coupon)
            coupon_list = Chat.getCouponlist(chatroom)
            for coupon in coupon_list:
                if coupon.customer == customer:
                    my_coupon = coupon
                else:
                    buddy_coupon = coupon

            if my_coupon == None:
                return Response(status=status.HTTP_404_NOT_FOUND)
            else:
                # checkActive ( Coupon self)
                check = Coupon.checkActive(my_coupon)
                if check:
                    if buddy_coupon.count == 1:
                        # activateCoupon ( Coupon self )
                        Coupon.activateCoupon(my_coupon)
                        Coupon.activateCoupon(buddy_coupon)

                        # deactiveChat ( Chat self )
                        Chat.deactiveChat(chatroom)

                        return Response(status=status.HTTP_201_CREATED)
                    else:   
                        return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
