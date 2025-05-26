from django.urls import path
from .views import CreateVehicleTransportRequestView, MyVehicleTransportRequestsView

urlpatterns = [
    path(
        "create-vehicle-request/",
        CreateVehicleTransportRequestView.as_view(),
        name="create-vehicle-request",
    ),
    path(
        "vehicle-requests/",
        MyVehicleTransportRequestsView.as_view(),
        name="vehicle-requests",
    ),
]
