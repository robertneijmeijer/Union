from authentication.backends import JWTAuthentication
from unions.models import Union
from unions.serializer import UnionSerializer
from rest_framework.response import Response
from rest_framework import viewsets, status


# TODO: Implement delete authentication and test update
class UnionViewSet(viewsets.ModelViewSet):
    queryset = Union.objects.all()
    serializer_class = UnionSerializer

    def create(self, request, *args, **kwargs):
        union = request.data.get('union', {})

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)
        # If its a string and not empty
        if not str(token) or not token:
            return Response('No Authorization header present. Header should be: "Authorization: Token JWT" ',
                            status=status.HTTP_401_UNAUTHORIZED)

        union['creator_id'] = user.user_id

        # Validate and save according to serializer
        serializer = self.serializer_class(data=union)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
