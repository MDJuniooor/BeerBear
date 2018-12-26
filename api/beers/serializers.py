from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField
)
from .models import Beer, BeerReview
from django.contrib.auth import get_user_model
User = get_user_model()
class FeedUserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('id','username')



class BeerSerializer(ModelSerializer):
    
    class Meta:
        model = Beer
        fields = (
            '__all__'
        )


class BeerReviewSerializer(ModelSerializer):
    
    class Meta:
        model = BeerReview
        fields = (
            'creator',
            'beer',
            'score',
            'comment',
            'created_at',
            'updated_at',
        )
