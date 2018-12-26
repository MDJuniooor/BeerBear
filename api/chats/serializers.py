from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import Chat,Message
from users.models import BeerBearCustomer


class ChatRoomSerializer(ModelSerializer):

    class Meta:
        model = Chat
        fields = (
            '__all__'
        )

class MessageSerializer(ModelSerializer):

    class Meta:
        model = Message
        fields = ('__all__')