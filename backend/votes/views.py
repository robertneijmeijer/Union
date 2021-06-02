from rest_framework import viewsets, mixins
from rest_framework.response import Response

from votes.serializer import VoteSerializer
from votes.models import Vote


class VotesViewSet(mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()

    # serializer_class = PostSerializer
    # queryset = Post.objects.all()
    # pagination_class = PostsPagination
    # permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        return Response("piemol")
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return Response("pik")
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return Response("pik")
        return super().destroy(request, *args, **kwargs)
