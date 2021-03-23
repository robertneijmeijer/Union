from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticatedOrReadOnly

from union.models import Union
from union.serializer import UnionSerializer


class UnionViewSet(viewsets.ModelViewSet):
    queryset = Union.objects.all()
    serializer_class = UnionSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]
