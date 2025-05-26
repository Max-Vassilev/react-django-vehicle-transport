from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer, VehicleTransportRequestSerializer
from .models import VehicleTransportRequest


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class CreateVehicleTransportRequestView(generics.CreateAPIView):
    queryset = VehicleTransportRequest.objects.all()
    serializer_class = VehicleTransportRequestSerializer
    permission_classes = [IsAuthenticated]


class MyVehicleTransportRequestsView(generics.ListAPIView):
    serializer_class = VehicleTransportRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return VehicleTransportRequest.objects.filter(user=self.request.user)
