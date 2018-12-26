from django.contrib.auth import get_user_model
from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import BeerShop, Stamp, BeerShopReview
from users.models import BeerBearCustomer
from django.contrib.auth import get_user_model
User = get_user_model()


class FeedUserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')



class BeershopSerializer(ModelSerializer):

    class Meta:
        model = BeerShop
        fields = (
            'id',
            'name',
            'owner'
        )
       
class BeershopDetailSerializer(ModelSerializer):
    
    class Meta:
        model = BeerShop
        fields = (
            '__all__'
        )


class StampSerializer(ModelSerializer):
    class Meta:
        model = Stamp
        fields = ('__all__')


class BuddyMatchSerializer(ModelSerializer):
    favorite_user_list = SerializerMethodField()
    class Meta:
        model = BeerShop
        fields = (
            'name', 'favorite_user_list'
        )

    def get_favorite_user_list(self, obj):
        matching_list = []
        if 'request' in self.context:
            request = self.context['request']
            customer = BeerBearCustomer.objects.get(pk=request.user.pk)
            for user in obj.favorite_user_list.all():
                customer_beer_set = set(customer.favorite_beer_list.all())
                user_beer_set = set(user.favorite_beer_list.all())
                if len(customer_beer_set.intersection(user_beer_set)) > 0:
                    matching_list.append(user)
        return FeedUserSerializer(matching_list, many=True).data


class BeerShopReviewSerializer(ModelSerializer):
    
    class Meta:
        model = BeerShopReview
        fields = (
            'id',
            'creator',
            'beershop',
            'score',
            'parent',
            'comment',
            'created_at',
            'updated_at',
        )
