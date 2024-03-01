from django.http import JsonResponse
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Basket
from lib.views import OwnerListCreateView
from .serializers.common import BasketSerializer
from .serializers.populated import populatedBasketSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.permissions import IsOwnerOrReadOnly

        
class BasketListCreateAPIView(OwnerListCreateView):
  queryset = Basket.objects.all()
  
  permission_classes = [IsAuthenticatedOrReadOnly]


  def get_serializer_class(self):
    if self.request.method == 'GET':
      return populatedBasketSerializer
    return BasketSerializer


class BasketDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Basket.objects.all()
  serializer_class = BasketSerializer
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'PATCH':
      return BasketSerializer
    return populatedBasketSerializer

