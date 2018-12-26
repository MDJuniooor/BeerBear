from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path('beers/', include('beers.urls', namespace="beers")),
    path('beershops/', include('beershops.urls', namespace="beershops")),
    path('users/', include('users.urls', namespace="users")),
    path('chats/',include('chats.urls',namespace="chats")),
    path('api/auth/token/', obtain_jwt_token),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
