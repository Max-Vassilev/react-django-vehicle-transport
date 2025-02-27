from django.contrib.auth.models import User
from rest_framework import serializers
from .models import VehicleTransportRequest


class VehicleTransportRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleTransportRequest
        fields = [
            "id",
            "user",
            "phone",
            "pickup_country",
            "pickup_city",
            "delivery_country",
            "delivery_city",
            "small_car_count",
            "big_car_count",
            "suv_count",
            "bus_count",
            "created_at",
        ]
        read_only_fields = ["id", "user", "created_at"]

    def create(self, validated_data):
        request = self.context["request"]

        validated_data["user"] = request.user

        return VehicleTransportRequest.objects.create(**validated_data)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
