from django.urls import path, include
from .controllers import (
    getBeerBuddyList,
    getBeerBuddyInfo,
    submitBeerBuddyMatching,
    approveBuddyRequest,
    getChatRoomList,
    getChatRoomMessage,
    submitMessage,
    applyBuddyBenefit
)
app_name = "chats"


urlpatterns = [
    path('matching/', getBeerBuddyList.as_view(), name='matching'),
    path('customer/<customer_id>/', getBeerBuddyInfo.as_view(), name='buddy_request'),
    path('addbuddy/<buddy_id>/', submitBeerBuddyMatching.as_view(), name='add_buddy_list'),
    path('approve/<buddy_id>/', approveBuddyRequest.as_view(), name="approve_buddy"),
    path('chatroom/',getChatRoomList.as_view(), name='chatroom_list'),
    path('chatroom/<chat_id>/',getChatRoomMessage.as_view(), name='chatroom_message'),
    path('chatroom/<chat_id>/message/',submitMessage.as_view(), name='create_message'),
    path('chatroom/<chat_id>/benefit/',applyBuddyBenefit.as_view(), name='receive_benefit'),
    
]
