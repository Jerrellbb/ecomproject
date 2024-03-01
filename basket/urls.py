from django.urls import path
from .views import AddToBasketView


urlpatterns = [
    path('<int:trainer_id>/', AddToBasketView.as_view(), )
]