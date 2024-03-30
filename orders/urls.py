from django.urls import path
from .views import OrderUpdateView, OrderListView


urlpatterns = [
    path('', OrderListView.as_view()),
    path('<int:pk>/', OrderUpdateView.as_view()),
]