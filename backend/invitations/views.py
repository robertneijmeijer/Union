# Create your views here.
from django.utils.datastructures import MultiValueDictKeyError
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from authentication.backends import JWTAuthentication
from invitations.models import Invitation
from invitations.serializers import InvitationCreateSerializer, InvitationSerializer
from django.core.exceptions import ObjectDoesNotExist

from unions.models import Union, UnionUsers


class InvitationsAPIView(APIView):
    serializer_class = InvitationCreateSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            invite_token = request.GET.get('invite_token')
            if invite_token is None:
                raise KeyError

            invitation = Invitation.objects.get(token=invite_token)
        except KeyError:
            return Response({"invite_token query param is missing"}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            return Response({}, status=status.HTTP_404_NOT_FOUND)

        serializer = InvitationSerializer(invitation)

        return Response(serializer.data)

    def post(self, request):
        try:
            name = request.data['name']
        except KeyError:
            return Response({'errors': "Missing Union name pk"}, status=status.HTTP_400_BAD_REQUEST)

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        creation_data = {
            'union': name,
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


class InvitationsAcceptAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            parsed_token = request.GET['invite_token']
            if parsed_token == "":
                raise ValueError
        except (MultiValueDictKeyError, ValueError):
            return Response({"The invite_token query params is missing/incorrect"}, status=status.HTTP_400_BAD_REQUEST)

        invite_token = request.GET['invite_token']
        database_invitation: Invitation = Invitation.objects.filter(token=invite_token).first()

        if database_invitation is None:
            return Response({}, status=status.HTTP_404_NOT_FOUND)

        if not database_invitation.can_be_accepted():
            return Response({"This invite has already been accepted"},
                            status=status.HTTP_403_FORBIDDEN)

        # Check for archived union if we want to implement it

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        if user is None or token is None:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        # Add user to unions
        InvitationCreateSerializer.accept_invitation(database_invitation, user)

        return Response({"name": database_invitation.union.name}, status=status.HTTP_202_ACCEPTED)


class OpenInvitationsAPIView(APIView):
    serializer_class = InvitationSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            union_name = request.query_params['union']

            if union_name is None:
                raise KeyError

            union = Union.objects.get(name=union_name)
        except KeyError:
            return Response({"union_id query param is missing"}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user, token = JWTAuthentication.authenticate_credentials_from_request_header(request)

        if token is None or user is None:
            return Response("Unauthorized user", status.HTTP_401_UNAUTHORIZED)

        queryset = Invitation.objects.filter(invite_creator=user, union=union, accepted_at__isnull=False)
        invites_left = UnionUsers.objects.filter(union=union, user=user).get().invites_left
        ser = self.serializer_class(queryset, many=True)

        if len(queryset) == 0:
            return Response({"invites_left": invites_left, "invites": []})

        return Response({"invites_left": invites_left, "invites": ser.data})
