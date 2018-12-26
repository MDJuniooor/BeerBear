from django.contrib.auth.models import AbstractUser
from django.core.files import File
from django.db.models import CharField
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models
import qrcode

class User(AbstractUser):

    name = CharField(_("Name of User"), blank=True, max_length=255)
    qr = models.ImageField(null=True, blank=True)
    # objects = InheritanceManager()
    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
    


class BeerBearCustomer(User):
    beerbuddy_send_list = models.ManyToManyField("self", blank=True) 
    beerbuddy_receive_list = models.ManyToManyField("self",blank=True)
    
    def generate_qrcode(self):
        from io import BytesIO
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(self.pk)
        qr.make(fit=True)
        qr = qr.make_image(fill_color="black", back_color="white")
        blob = BytesIO()
        qr.save(blob, 'JPEG')
        self.qr.save('qrcode_{}.jpeg'.format(self), File(blob))
        

    def checkFavoriteBeerstatus(self, beer):
        check = False
        beerList = self.favorite_beer_list.all()
        for find_beer in beerList:
            if find_beer == beer:
                check = True
        if check:
            return True
        else:
            return False

    def checkFavoriteBeerShopstatus(self, beershop):
        check = False
        beershopList = self.favorite_beershop_list.all()
        for shop in beershopList:
            if shop == beershop:
                check =True
        if check:
            return True
        else:
            return False    

    def getBearBuddyList(self):
        from beershops.models import BeerShop 
        beershop_list = self.favorite_beershop_list.all()
        matching_set = set()
        for beershop in beershop_list:
            # getBearShopFavoriteUserList ( B.B Customer -> BearShop)
            user_list = BeerShop.getBearhopFavoriteUserList(beershop)
            for customer in user_list:
                matching_set.add(customer)
        matching_list = []
        
        for customer in list(matching_set):
            # getFavoriteBeerList (B.B Customer self)
            customer_beer_set = set(BeerBearCustomer.getFavoriteBeerList(customer))
            self_beer_set = set(BeerBearCustomer.getFavoriteBeerList(self))
            if len(customer_beer_set.intersection(self_beer_set)) > 0:
                    matching_list.append(customer)
        return matching_list

    def getFavoriteBeerList(self):
        return self.favorite_beer_list.all()

    def getFavoriteBeerShopList(self):
        return self.favorite_beershop_list.all()
    
    def addBeerBuddyList(self, buddy):
        buddy_list = self.beerbuddy_send_list.all()
        if buddy in buddy_list:
            return False
        else:
            self.beerbuddy_send_list.add(buddy)
            find_buddy = BeerBearCustomer.objects.get(buddy)
            find_buddy.beerbuddy_receive_list.add(self)
            return True

    def approveBuddy(self, buddy_id):
        receive_list = self.beerbuddy_receive_list.all()
        buddy = BeerBearCustomer.objects.get(pk=buddy_id)
        if buddy in receive_list:
            self.beerbuddy_receive_list.remove(buddy)
            return True
        else:
            return False
    
    def checkStamp(self):
        from beershops.models import Stamp
        from coupons.models import Coupon
        stamp_list = Stamp.objects.filter(customer=self, is_active=True)
        if len(stamp_list) >= 12:
            print('come')
            Coupon.objects.create(name="스탬프 12개 발행 쿠폰", customer=self, is_active=True, is_used=True,count=0)
            for stamp in stamp_list:
                stamp.is_active = False
                stamp.save()
    
    def getCouponList(self):
        from coupons.models import Coupon
        return Coupon.objects.filter(is_active=True, customer=self)

    class Meta:
        verbose_name = 'BeerBearCustomer'
        verbose_name_plural = 'BeerBearCustomers'

class BeershopOwner(User):
    
    def getBeerShop(self):
        from beershops.models import BeerShop
        find_shop = get_object_or_404(BeerShop,owner=self)
        return find_shop
    
    class Meta:
        verbose_name = 'BeershopOwner'
        verbose_name_plural = 'BeershopOwners'
