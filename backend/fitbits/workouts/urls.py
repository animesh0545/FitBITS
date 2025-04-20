from django.urls import path
from .views import WorkoutViewSet

urlpatterns = [
    path('', WorkoutViewSet.as_view({'get': 'list', 'post': 'create'}), name='workout-list'),
    path('<int:pk>/', WorkoutViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    }), name='workout-detail'),
] 