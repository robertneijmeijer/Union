from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .renderers import UserJSONRenderer
from users.models import User
from users.serializers import UserSerializer, RegistrationSerializer, LoginSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class RegistrationAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = RegistrationSerializer
    renderer_classes = (UserJSONRenderer,)

    def post(self, request):
        try:
            user = request.data.get('user')
            if user is None: raise Exception
        except:
            return Response({'errors': "Missing user key or empty body "}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username__iexact=user["username"]):
            return Response({'errors': "Username already exists"}, status=status.HTTP_406_NOT_ACCEPTABLE)

        elif User.objects.filter(email__iexact=user["email"]):
            return Response({'errors': "Email already exists"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            serializer = self.serializer_class(data=user)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            serialized_data = serializer.data
            return Response(serialized_data, status=status.HTTP_201_CREATED)


class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = LoginSerializer

    def post(self, request):
        user = request.data.get('user', {})

        # Notice here that we do not call `serializer.save()` like we did for
        # the registration endpoint. This is because we don't  have
        # anything to save. Instead, the `validate` method on our serializer
        # handles everything we need.
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)

        response = Response(status=status.HTTP_200_OK)
        response.set_cookie(
            key='Authentication',
            value='Bearer ' + serializer.data.get('token'),
            httponly=True,
            samesite='none',
            secure=True,
        )
        response.data = serializer.data

        return response
