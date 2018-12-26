from django.urls import path, include
from .controllers import (
    getBeerWithKeyword,
    recommendBeer,
    getBeerInfo,
    getMoreBeerReview,
    beerFavorite,
    getBeerReview,
    createBeerReview,
    deleteBeerReview
)
app_name = "beers"

urlpatterns = [
    path('', getBeerWithKeyword.as_view(), name='search_beer'),
    path('recommend/',recommendBeer.as_view(), name='recommend_beer'),
    path('detail/<beer_id>/',getBeerInfo.as_view(), name='beer_detail'),
    path('comments/<beer_id>/',getMoreBeerReview.as_view(), name='beer_comment'),
    path('favorite/<beer_id>/', beerFavorite.as_view(), name='favorite_beer'),
    path('review/<beer_id>/', getBeerReview.as_view(), name='beer_review'),
    path('review/<beer_id>/create/', createBeerReview.as_view(), name='create_beer_review_with_parent'),
    path('review/<beer_id>/delete/<review_id>/', deleteBeerReview.as_view(), name='delete_beer_review'),

    # path('', beer_list, name='beer-list'),
    # path('<int:pk>/', beer_detail, name='beer-detail'),
    # path("<int:beer_id>/favorite/", BeerFavoriteAPIView.as_view(), name='beer-favorite'),
    # path('<int:beer_id>/review/', BeerReviewListAPIView.as_view(), name='beer-review'),
    # path('<int:beer_id>/review/<int:parent_id>/', BeerReviewWithParentAPIView.as_view(), name='beer-review-parent'),
]
