from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from post.views import PostViewSet
from users.views import UserViewSet
from union.views import UnionViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'post', PostViewSet)
router.register(r'union', UnionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('users/', include('users.urls')),
    path('admin/', admin.site.urls),
]
