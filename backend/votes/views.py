from django.db.models import QuerySet
from rest_framework import viewsets, mixins, status
from rest_framework.response import Response

from authentication.backends import JWTAuthentication
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
        votes: QuerySet[Vote]

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        request.data['user'] = user.user_id

        if 'post' not in request.data:
            return Response("Post id is required", status=status.HTTP_400_BAD_REQUEST)

        if 'comment' in request.data:
            votes = Vote.objects.filter(
                post=request.data['post'], comment=request.data['comment'], user=user.user_id)
        else:
            votes = Vote.objects.filter(post=request.data['post'], comment=None, user=user.user_id)

        if votes.count() != 0 or 'vote_id' in request.data:
            return Response("Can not modify existing data", status.HTTP_304_NOT_MODIFIED)

        # Validate and save according to serializer
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)
        old_vote: Vote = self.get_object()

        if token is None or user is None or old_vote.user.user_id != user.user_id:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        if 'post' not in request.data:
            return Response("Please provide a post id", status=status.HTTP_400_BAD_REQUEST)

        if old_vote.post and old_vote.post.post_id != request.data['post']:
            return Response("Post can't be modified", status=status.HTTP_400_BAD_REQUEST)

        if old_vote.comment:
            if 'comment' not in request.data:
                return Response("Please provide a comment id", status=status.HTTP_400_BAD_REQUEST)
            if old_vote.comment.comment_id != request.comment:
                return Response("The comment can't be modified", status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(old_vote, data=request.data, partial='partial')
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data, status.HTTP_200_OK)

    def destroy(self, request, *args, **kwargs):
        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)
        old_vote: Vote = self.get_object()

        if token is None or user is None or old_vote.user.user_id != user.user_id:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        return super().destroy(request, *args, **kwargs)
