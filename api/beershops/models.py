from django.db import models
from django.contrib.auth import get_user_model
from users.models import BeerBearCustomer,BeershopOwner
from beers.models import Beer

User = get_user_model()

class BeerShop(models.Model):
    ''' Beer Shop '''
    name = models.CharField(max_length=200)
    beer_list = models.ManyToManyField(Beer, related_name='sale_beershop')
    shop_image = models.ImageField(null=True, blank=True)
    owner = models.ForeignKey(BeershopOwner, null=True,
                              on_delete=models.CASCADE)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    favorite_user_list = models.ManyToManyField(
        BeerBearCustomer, related_name='favorite_beershop_list', blank=True)

    def addFavoriteUser(self, customer):
        self.favorite_user_list.add(customer)
        
    def deleteFavoriteUser(self, customer):
        self.favorite_user_list.remove(customer)

    def getBeerShopReviewList(self):
        reviewList = BeerShopReview.objects.filter(beershop=self)
        return reviewList

    def getBearShopFavoriteUserList(self):
        return self.favorite_user_list.all()
    
    def createStamp(self, customer):
        Stamp.objects.create(beershop=self, customer=customer)
        
class BeerShopReview(models.Model):
    creator = models.ForeignKey(User, on_delete="CASCADE", null=True)
    beershop = models.ForeignKey(BeerShop, on_delete="CASCADE", null=True)
    score = models.IntegerField(choices=list(zip(range(1, 6), range(1, 6))), null=True)
    comment = models.TextField()
    parent = models.ForeignKey("self", null=True, blank=True, on_delete="CASCADE")
    created_at = models.DateTimeField(auto_now_add=True)  # first created
    updated_at = models.DateTimeField(auto_now=True)  # last-modified
    
    def checkIdentity(self, creator, beershop):
        if self.creator != creator:
            return False
        if self.beershop != beershop:
            return False
        return True
    class Meta:
        ordering = ["created_at"]


class Stamp(models.Model):
    beershop = models.ForeignKey(BeerShop, on_delete=models.CASCADE)
    customer = models.ForeignKey(BeerBearCustomer, on_delete=models.CASCADE,null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)  # first created

        