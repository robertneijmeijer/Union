from rest_framework import viewsets

from post.models import Post
from post.serializer import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
