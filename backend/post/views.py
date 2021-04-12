from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from post.models import Post
from post.serializer import PostSerializer


class PostsPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    pagination_class = PostsPagination
