import logging

import jwt
from rest_framework import viewsets, status
from rest_framework.response import Response

from post.models import Post
from post.serializer import PostSerializer
from project import settings


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    def create(self, request, *args, **kwargs):
        post = request.data

        token = request.headers.get('Authorization', None)

        if (token is None):
            return Response(status.HTTP_401_UNAUTHORIZED)

        token = token.replace('Bearer ', '')

        # Retrieve user_id from JWT
        user_id = jwt.decode(token, settings.SECRET_KEY, ["HS256"])['id']

        post['creator_id'] = user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=post)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
