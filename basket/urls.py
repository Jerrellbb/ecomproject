from django.urls import path
from .views import BasketListCreateAPIView, BasketDetailView


urlpatterns = [
    path('', BasketListCreateAPIView.as_view(),),
    path('<int:pk>/', BasketDetailView.as_view(),),

]