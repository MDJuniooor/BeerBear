from django.db import models
from django.core.files import File
from users.models import BeerBearCustomer
from datetime import datetime, timedelta
import qrcode
class Coupon(models.Model):

    name = models.CharField(max_length=200, null=True)
    is_used = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    count = models.IntegerField()
    due_date = models.DateTimeField(default=datetime.now()+timedelta(days=90))
    created_at = models.DateTimeField(auto_now_add=True)  # first created
    customer = models.ForeignKey(BeerBearCustomer, on_delete=models.CASCADE, null=True)
    qr = models.ImageField(null=True, blank=True)

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



    def checkActive(self):
        if self.count == 0:
            self.count = 1
            self.save()
            return True
        else:
            return False
    
    def activateCoupon(self):
        self.is_active = True
        self.save()
