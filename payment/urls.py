from django.urls import path
from .views import ShippingAddressCreateView, ShippingAddressDetailView


urlpatterns = [
    path('', ShippingAddressCreateView.as_view()),
    path('<int:pk>/', ShippingAddressDetailView.as_view()),
    
]