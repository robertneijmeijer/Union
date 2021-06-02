from authentication.backends import JWTAuthentication
from unions.models import Union
from unions.serializer import UnionSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status
from s3.file_uploader import file_uploader
import logging


# TODO: Implement delete authentication and test update
class UnionViewSet(viewsets.ModelViewSet):
    queryset = Union.objects.all()
    serializer_class = UnionSerializer

    def create(self, request, *args, **kwargs):
        
        union = request.data.get('union', {})

        logging.warning("FILES:")
        logging.warning(request.FILES)

        union['banner'] = file_uploader(name=request.FILES['banner'].name, file=request.FILES['banner'])

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        union['creator_id'] = user.user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=union)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
