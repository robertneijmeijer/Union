from rest_framework import viewsets

from union.models import Union
from union.serializer import UnionSerializer


class UnionViewSet(viewsets.ModelViewSet):
    serializer_class = UnionSerializer
    queryset = Union.objects.all()
