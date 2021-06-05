from rest_framework import routers
from django.urls import include, path

from users.views import UserViewSet, ValidationAPIView, RegistrationAPIView, LoginAPIView, CurrentUserAPIView

userRouter = routers.DefaultRouter()
userRouter.register(r'', UserViewSet)

urlpatterns = [
    path('', include(userRouter.urls)),
    path("/current", CurrentUserAPIView.as_view()),
    path('/validate', ValidationAPIView.as_view()),
    path('/register', RegistrationAPIView.as_view()),
    path('/login', LoginAPIView.as_view()),
]
