from django.db import models
from users.models import User,BeerBearCustomer
# Create your models here.


class Beer(models.Model):
    ref = models.IntegerField(null=True)
    name = models.CharField(max_length=200, null=True)
    brewery = models.CharField(max_length=200,null=True)
    style = models.CharField(max_length=200,null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200,null=True)
    country = models.CharField(max_length=200,null=True)
    ABV = models.FloatField(null=True)
    IBU = models.IntegerField(null=True)
    EST_CAL = models.IntegerField(null=True)
    avg_scr = models.FloatField(null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(null=True,blank=True)
    favorite_user_list = models.ManyToManyField(
        BeerBearCustomer, related_name='favorite_beer_list', blank=True)
    def __str__(self):
        return 'beer_id : {} - {}'.format(self.ref, self.name)

    def addFavoriteUser(self, customer):
        self.favorite_user_list.add(customer)

    def deleteFavoriteUser(self, customer):
        self.favorite_user_list.remove(customer)

    def getBeerReviewList(self):
        reviewList = BeerReview.objects.filter(beer=self)
        return reviewList

class BeerReview(models.Model):
    creator = models.ForeignKey(User, on_delete="CASCADE", null=True)
    beer = models.ForeignKey(Beer, on_delete="CASCADE", null=True)
    score = models.IntegerField(choices=list(zip(range(1, 6), range(1, 6))), null=True)
    comment = models.TextField()
    parent = models.ForeignKey("self", null=True, blank=True, on_delete="CASCADE")
    created_at = models.DateTimeField(auto_now_add=True)  # first created
    updated_at = models.DateTimeField(auto_now=True)  # last-modified
    
    class Meta:
        ordering = ["-created_at"]
