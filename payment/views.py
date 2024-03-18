from rest_framework.generics import RetrieveUpdateDestroyAPIView
from lib.views import OwnerListCreateView
from .models import ShippingAddress
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers.common import ShippingAddressSerializer
from lib.permissions import IsOwnerOrReadOnly
# Create your views here.


class ShippingAddressCreateView(OwnerListCreateView):
  queryset = ShippingAddress.objects.all()
  serializer_class = ShippingAddressSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]


class ShippingAddressDetailView(RetrieveUpdateDestroyAPIView):
  queryset = ShippingAddress.objects.all()
  serializer_class = ShippingAddressSerializer
  permission_classes = [IsOwnerOrReadOnly]