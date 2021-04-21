import logging

import jwt
from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

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
        # comments = Comment.objects.filter(parent_id=None).order_by('-upvotes')
        comments = Comment.objects.order_by('-upvotes')

        query_set = self.filter_queryset(comments)
        pagination = self.paginate_queryset(query_set)

        if pagination is not None:
            serializer = self.get_serializer(pagination, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(pagination, many=True)
        result_set = serializer.data

        for comment in result_set:
            logging.warning(comment)

        return Response(result_set)

    def create(self, request, *args, **kwargs):
        token = request.headers.get('Authorization', None)

        if token is None:
            return Response(status.HTTP_401_UNAUTHORIZED)

        token = token.replace('Bearer ', '')

        # Retrieve user_id from JWT
        user_id = jwt.decode(token, settings.SECRET_KEY, ["HS256"])['id']

        if user_id is None:
            Response("Invalid JWT", status.HTTP_400_BAD_REQUEST)

        logging.warning(user_id)
        comment = request.data
        comment['user'] = user_id

        logging.warning(comment)

        # Validate and save according to serializer
        serializer = self.serializer_class(data=comment)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)

    # def retrieve(self, request, *args, **kwargs):
    #     pk = kwargs["pk"]
    #     depth = 5
    #
    #     if "depth" in request.GET:
    #         depth = request.GET["depth"]
    #
    #     parentComment = Comment.objects.get(comment_id=pk)
    #
    #     serializer = ChildrenSerializer(data=parentComment)
    #     serializer.is_valid(raise_exception=True)
    #     serialized_data = serializer.data
    #
    #     return Response(serialized_data, status.HTTP_200_OK)
