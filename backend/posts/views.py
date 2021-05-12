from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

import jwt
from rest_framework import viewsets, status
from rest_framework.response import Response

from authentication.backends import JWTAuthentication
from posts.models import Post
from posts.serializer import PostSerializer
from project import settings


class PostsPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    pagination_class = PostsPagination

    def create(self, request, *args, **kwargs):
        post = request.data

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        if token or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        post['creator'] = user.user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=post)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
