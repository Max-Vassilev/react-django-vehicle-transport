from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer, VehicleTransportRequestSerializer
from .models import VehicleTransportRequest


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        return Response(
            {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
        )


class CreateVehicleTransportRequestView(generics.CreateAPIView):
    queryset = VehicleTransportRequest.objects.all()
    serializer_class = VehicleTransportRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_context(self):
        return {"request": self.request}


class AllVehicleTransportRequestsView(generics.ListAPIView):
    queryset = VehicleTransportRequest.objects.all()
    serializer_class = VehicleTransportRequestSerializer
    permission_classes = [AllowAny]
