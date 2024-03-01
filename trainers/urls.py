from django.urls import path
from .views import TrainerListCreateAPIView, TrainerDetailView


urlpatterns = [
    path('', TrainerListCreateAPIView.as_view()),
    path('<int:pk>/', TrainerDetailView.as_view()),
]