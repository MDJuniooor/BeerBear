from django.urls import path, include
from .controllers import (
    getNearbyBeerShop,
    getBeerShopInfo,
    getBeershopSearch,
    BeerShopFavorite,
    getBeerShopReview,
    createBeerShopReview,
    createBeerShopReviewWithParent,
    deleteBeerShopReview
)
app_name = "beershops"

urlpatterns = [
    path('', getNearbyBeerShop.as_view(), name='nearby_beershop'),
    path('detail/<beerShop_id>/',getBeerShopInfo.as_view(), name="beershop_info"),
    path('search/<beer_id>/',getBeershopSearch.as_view(), name="search_beershop_list"),
    path('favorite/<beerShop_id>/', BeerShopFavorite.as_view(), name='favorite_beershop'),
    path('review/<beerShop_id>/', getBeerShopReview.as_view(), name='beershop_review'),
    path('review/<beerShop_id>/create/', createBeerShopReview.as_view(), name='create_beershop_review'),
    path('review/<beerShop_id>/create/<parent_id>/', createBeerShopReviewWithParent.as_view(), name='create_beershop_review_with_parent'),
    path('review/<beerShop_id>/delete/<review_id>/', deleteBeerShopReview.as_view(), name='delete_beershop_review'),

    # path('', BeershopListCreateAPIView.as_view(), name='beershop_list'),
    # path('<int:pk>/', BeershopDetailAPIView.as_view(), name='create_beershop'),
    # path('search1/', BeershopSearchWithDistanceAPIView.as_view(), name='beershop_search_with_distance'),
    # path('search2/<int:beer_id>/', BeershopSearchWithBeerAPIView.as_view(), name='beershop_search_with_distance'),
    # path("<int:beershop_id>/favorite/", BeerShopFavoriteAPIView.as_view(), name='beershop_favorite'),
]
