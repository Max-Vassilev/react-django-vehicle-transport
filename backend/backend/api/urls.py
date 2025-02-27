from django.urls import path
from .views import CreateVehicleTransportRequestView, AllVehicleTransportRequestsView

urlpatterns = [
    path(
        "create-vehicle-request/",
        CreateVehicleTransportRequestView.as_view(),
        name="create-vehicle-request",
    ),
    path(
        "all-vehicle-requests/",
        AllVehicleTransportRequestsView.as_view(),
        name="all-vehicle-requests",
    ),
]
