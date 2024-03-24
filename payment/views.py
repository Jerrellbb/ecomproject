from rest_framework.generics import RetrieveUpdateDestroyAPIView
from lib.views import OwnerListCreateView
from .models import ShippingAddress
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers.common import ShippingAddressSerializer
from lib.permissions import IsOwnerOrReadOnly
import stripe
import json
from django.http import JsonResponse
from basket.models import Basket
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
stripe.api_key = 'sk_test_51Ox73PAEr8yRclawEQxBVbosqVp5iZa9BUSxgvk8Q1JMG8zmbz46Ic0ABLTFAQYFFwPgxEnyNP1jOO5GsTDjGINl00gpQSb3YY'

class ShippingAddressCreateView(OwnerListCreateView):
  queryset = ShippingAddress.objects.all()
  serializer_class = ShippingAddressSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]


class ShippingAddressDetailView(RetrieveUpdateDestroyAPIView):
  queryset = ShippingAddress.objects.all()
  serializer_class = ShippingAddressSerializer
  permission_classes = [IsOwnerOrReadOnly]

@csrf_exempt
def create_payment_intent(request):
    try:
        data = json.loads(request.body)
        basket_id = data.get('basketId')
        basket = Basket.objects.get(pk=basket_id)
        total_amount = basket.calculate_total_amount()
        
        intent = stripe.PaymentIntent.create(
            amount=int(total_amount * 100),  
            currency='GBP',
            description='Payment for items in the basket'
        )
        return JsonResponse({'client_secret': intent.client_secret})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=403)