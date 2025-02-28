from django.db import models
from django.contrib.auth.models import User


class VehicleTransportRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    pickup_country = models.CharField(max_length=100)
    pickup_city = models.CharField(max_length=100)

    delivery_country = models.CharField(max_length=100, default="Bulgaria")
    delivery_city = models.CharField(max_length=100, default="Sofia")

    is_approved = models.BooleanField(default=False)

    small_car_count = models.PositiveIntegerField(default=0)
    big_car_count = models.PositiveIntegerField(default=0)
    suv_count = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.is_approved:
            status = "APPROVED"
        else:
            status = "PENDING"
        return f"Request by: {self.user} --- {status}"
