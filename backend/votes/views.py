from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from django.core import serializers

from authentication.backends import JWTAuthentication
from posts.models import Post
from votes.serializer import VoteSerializer
from votes.models import Vote


class VoteViewSet(
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet
):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()

    def create(self, request, *args, **kwargs):
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)
        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        if 'post' not in kwargs:
            return Response("Post id required", status=status.HTTP_400_BAD_REQUEST)

        vote = {"post": kwargs['post'], "comment": None, "user": user.user_id, "vote": request.data}

        if 'comment' in kwargs:
            vote['comment'] = kwargs['comment']

        database_vote = Vote.objects.filter(comment=vote['comment'], user=vote['user'], post=vote["post"])
        if database_vote.count() != 0:
            return Response({}, status.HTTP_304_NOT_MODIFIED)

        # Validate and save according to serializer
        serializer = self.serializer_class(data=vote)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):


        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
