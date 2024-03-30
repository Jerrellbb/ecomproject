from rest_framework import serializers
from ..models import Order
from trainers.serializers.common import BasketListTrainerSerializer
from payment.serializers.common import ShippingAddressSerializer

class OrderSerializer(serializers.ModelSerializer):
  trainers = BasketListTrainerSerializer(many=True, read_only=True)
  shipping_address = ShippingAddressSerializer( read_only=True)
  class Meta:
    model = Order
    fields = '__all__'