from rest_framework import viewsets
from votes.serializer import VoteSerializer
from votes.models import Vote


class VotesViewSet(viewsets.ModelViewSet):
    serializer_class = VoteSerializer
    queryset = Vote.objects.all()
