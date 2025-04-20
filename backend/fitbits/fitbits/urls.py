from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from workouts.views import WorkoutViewSet

router = DefaultRouter()
router.register(r'workouts', WorkoutViewSet, basename='workout')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
] 