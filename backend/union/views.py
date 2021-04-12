from rest_framework import viewsets

from union.models import Union
from union.serializer import UnionSerializer


# TODO: Implement authentication and test with auth.
class UnionViewSet(viewsets.ModelViewSet):
    queryset = Union.objects.all()
    serializer_class = UnionSerializer
