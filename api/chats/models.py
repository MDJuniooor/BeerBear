from django.db import models
from coupons.models import Coupon
from users.models import BeerBearCustomer

class Chat(models.Model):
    userlist = models.ManyToManyField(BeerBearCustomer)
    coupons = models.ManyToManyField(Coupon)
    is_active = models.BooleanField()
    
    def addCoupon(self, coupon1, coupon2):
        coupon_list = self.coupons.all()
        if coupon1 in coupon_list:
            return False
        elif coupon2 in coupon_list:
            return False
        else:
            self.coupons.add(coupon1, coupon2)
            return True
    
    # getCouponlist ( Chat -> Coupon)
    def getCouponlist(self):
        return self.coupons.all()
        
    def deactiveChat(self):
        self.is_active = False
        self.save()
        
class Message(models.Model):
    chatroom = models.ForeignKey(Chat, on_delete="CASCADE")
    creator = models.ForeignKey(BeerBearCustomer, on_delete="CASCADE",null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

    class Meta:
        ordering = ["created_at"]
