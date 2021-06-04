
import jwt
from django.http import HttpResponseBadRequest
from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from authentication.backends import JWTAuthentication
from comments.serializer import CommentSerializer
from comments.models import Comment
from project import settings
from users.models import User


class CommentsPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    pagination_class = CommentsPagination

    def list(self, request, *args, **kwargs):
        post = self.request.GET.get('post')

        if post is None:
            return HttpResponseBadRequest("Query param 'post' required.")
        
        comments = Comment.objects.filter(parent_id=None).order_by('-upvotes')

        query_set = self.filter_queryset(comments)
        query_set = query_set.filter(post=post)
        pagination = self.paginate_queryset(query_set)

        if pagination is not None:
            serializer = self.get_serializer(pagination, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(query_set, many=True)
        result_set = serializer.data

        return Response(result_set)

    def create(self, request, *args, **kwargs):
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        comment = request.data
        comment['user'] = user.user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=comment)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, *args, **kwargs):
        depth = 5

        # Check if nesting is given
        if "depth" in request.GET and request.GET["depth"].isdigit():
            depth = request.GET["depth"]

        parentComment = self.get_object()
        serializer = self.get_serializer(parentComment, context={'nesting_depth': depth})

        return Response(serializer.data, status.HTTP_200_OK)
