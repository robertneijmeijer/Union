from rest_framework import routers
from django.urls import include, path

from users.views import UserViewSet, authenticate_user

userRouter = routers.DefaultRouter()
userRouter.register(r'', UserViewSet, basename='user')
# userRouter.register('test', authenticate_user, basename="test")
# userRouter.register("/login" UserAuthViewSet.authenticate_user())

urlpatterns = [
    path('', include(userRouter.urls)),
    path('login', authenticate_user)
]
