from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from .models import Order
from .serializers.common import OrderSerializer
from rest_framework.permissions import IsAdminUser
# Create your views here.

class OrderListView(ListAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  

class OrderUpdateView(RetrieveUpdateDestroyAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAdminUser]

  


