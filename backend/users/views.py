import jwt
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, mixins, views
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.models import User
from users.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(('GET',))
def authenticate_user(request):
    return Response({"You just hit the authenticate_user function": "as", "request":request.method }, status=200)

    # try:
    #     username = request.data['username']
    #     password = request.data['password']
    #
    #     user = User.objects.get(username=username, password=password)
    #
    #     if user:
    #         # Do something
    #         jwt.encode(user)
    #
    #
    #         return Response({"user": user})
    #     else:
    #         # Return user not found
    #         return Response({"user not found"}, status=403)
    #
    # except KeyError:
    #     # Was not able to parse email and password
    #     return Response({"Please provide email and password"}, status=422)
