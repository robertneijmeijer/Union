from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from authentication.backends import JWTAuthentication
from invitations.serializers import InvitationSerializer
from project import settings


class InvitationsAPIView(APIView):
    serializer_class = InvitationSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            union_id = request.data['union_id']
        except KeyError:
            return Response({'errors': "Missing union_id key"}, status=status.HTTP_400_BAD_REQUEST)

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        creation_data = {
            'union': union_id,
            'invite_creator': user.user_id
        }

        serializer = self.serializer_class(data=creation_data)

        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            if type(e) is PermissionError:
                return Response(str(e), status=status.HTTP_403_FORBIDDEN)
            elif type(e) is ValidationError:
                if "does not exist" in str(e):
                    return Response(str(e), status=status.HTTP_404_NOT_FOUND)
                else:
                    return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

            # Error went through all catches
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        serializer.save()
        serialized_data = serializer.data

        return Response(serialized_data, status=status.HTTP_201_CREATED)
