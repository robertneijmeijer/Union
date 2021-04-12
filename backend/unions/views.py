from rest_framework import viewsets

from authentication.backends import JWTAuthentication
from unions.models import Union
from unions.renderers import UnionJSONRenderer
from unions.serializer import UnionSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status
from django.conf import settings
import jwt


# TODO: Implement authentication and test with auth.
class UnionViewSet(viewsets.ModelViewSet):
    queryset = Union.objects.all()
    serializer_class = UnionSerializer
