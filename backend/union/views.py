from rest_framework import viewsets

from authentication.backends import JWTAuthentication
from union.models import Union
from union.renderers import UnionJSONRenderer
from union.serializer import UnionSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status
from django.conf import settings
import jwt


class UnionViewSet(viewsets.ModelViewSet):
    serializer_class = UnionSerializer
    renderer_classes = (UnionJSONRenderer,)
    queryset = Union.objects.all()

    def create(self, request, *args, **kwargs):
        print("Create union")
        union = request.data.get('union', {})
        token = request.data.get('token', {})

        user_id = jwt.decode(token, settings.SECRET_KEY, ["HS256"])['id']
        union['creator_id'] = user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=union)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
