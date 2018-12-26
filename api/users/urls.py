from django.urls import path, include
from users.views import UserProfileAPIView, QRCodeReadAPIView
from .controllers import (
    getMyInfo,
    addStamp,
    getCouponList,
    getCouponQRcode
)
from .ownerController import (
    getMyBeerShop,
    getMyBeerShopReview,
    updateBeerShopReviewReply,
    submitBeerShopReviewReply,
    deleteBeerShopReviewReply
)
app_name = "users"

urlpatterns = [
    path('profile/', view=getMyInfo.as_view(), name='profile'),
    path('addstamp/<customer_id>/', view=addStamp.as_view(), name='add_stamp'),
    path('coupon/', view=getCouponList.as_view(), name='coupon_list'),
    path('coupon/<coupon_id>/', view=getCouponQRcode.as_view(), name='coupon_qrcode'),
    path('beershop/', view=getMyBeerShop.as_view(), name='beershop'),
    path('beershop/review/', view=getMyBeerShopReview.as_view(), name='beershop_review'),
    path('beershop/review/<review_id>/',view=submitBeerShopReviewReply.as_view(), name='reply_review'),
    path('beershop/review/<review_id>/update/',view=updateBeerShopReviewReply.as_view(), name='update_reply'),
    path('beershop/review/<review_id>/<reply_id>/delete/',view=deleteBeerShopReviewReply.as_view(), name='delete_reply'),

]
