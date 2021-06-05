from django.http import HttpResponseBadRequest
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from rest_framework import status
from rest_framework.response import Response

from unions.models import Union
from authentication.backends import JWTAuthentication
from posts.models import Post
from posts.serializer import PostSerializer, MultiplePostRetrieveSerializer, PostRetrieveSerializer
from rest_framework.permissions import IsAuthenticated


class PostsPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'


class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    pagination_class = PostsPagination
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        union_id = self.request.GET.get('union_id')
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(
            request)

        if union_id is None:
            return HttpResponseBadRequest("Query param union_id required.")

        queryset = self.filter_queryset(self.get_queryset())
        queryset = queryset.filter(union_id=union_id)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = MultiplePostRetrieveSerializer(page, many=True, context = {'user': user})
            data = self.get_paginated_response(serializer.data)
            return data

        serializer = MultiplePostRetrieveSerializer(queryset, context = {'user': user})
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(
            request)
        instance = self.get_object()
        serializer = PostRetrieveSerializer(instance, context={'user': user})
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(
            request)
        post = request.data

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        post['user'] = user.user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=post, context={'user': user})
        serializer.context['user'] = user.user_id
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
