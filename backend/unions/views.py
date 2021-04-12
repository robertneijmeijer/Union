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

    def create(self, request, *args, **kwargs):
        union = request.data.get('union', {})
        
        token = request.headers.get('Authorization', {})
        token = token.replace('Bearer ', '')

        # Retrieve user_id from JWT
        user_id = jwt.decode(token, settings.SECRET_KEY, ["HS256"])['id']

        union['creator_id'] = user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=union)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
