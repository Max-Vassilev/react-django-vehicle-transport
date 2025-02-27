from django.contrib import admin
from django.urls import path, include
from backend.api.views import CreateUserView, LoginView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/user/login/", LoginView.as_view(), name="login"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("backend.api.urls")),
]
