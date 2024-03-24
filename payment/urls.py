from django.urls import path
from .views import ShippingAddressCreateView, ShippingAddressDetailView, create_payment_intent


urlpatterns = [
    path('', ShippingAddressCreateView.as_view()),
    path('<int:pk>/', ShippingAddressDetailView.as_view()),
    path('create-payment-intent/', create_payment_intent),
    
]