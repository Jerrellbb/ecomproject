from rest_framework.generics import RetrieveUpdateDestroyAPIView
from lib.views import OwnerListCreateView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers.common import ShippingAddressSerializer
from lib.permissions import IsOwnerOrReadOnly
import stripe
import json
from django.http import JsonResponse
from .models import ShippingAddress
from basket.models import Basket
from trainers.models import Trainer

from django.views.decorators.csrf import csrf_exempt
from django.db import transaction
from orders.models import Order
import environ

env = environ.Env()
# Create your views here.
# stripe test key
stripe.api_key = env('STRIPE_KEY')

class ShippingAddressCreateView(OwnerListCreateView):
  queryset = ShippingAddress.objects.all()
  serializer_class = ShippingAddressSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]


class ShippingAddressDetailView(RetrieveUpdateDestroyAPIView):
  queryset = ShippingAddress.objects.all()
  serializer_class = ShippingAddressSerializer
  permission_classes = [IsOwnerOrReadOnly]


# create a payment intent using the Stripe API
@csrf_exempt
def create_payment_intent(request):
    try:
        data = json.loads(request.body)
        

        print("Data received:", data)
        basket_id = data.get('basketId')
        basket = Basket.objects.get(pk=basket_id)
        total_amount = basket.calculate_total_amount()

        
        
        # decrease stock of trainers in basket
        trainer_ids = list(basket.trainer.values_list('id', flat=True))
        for trainer_id in trainer_ids:
          try:
              trainer = Trainer.objects.get(id=trainer_id)
              if trainer.available_stock > 0:
                  trainer.available_stock -= 1
                  if trainer.available_stock == 0:
                    trainer.in_stock = False
                  trainer.save()
          except Trainer.DoesNotExist:
              pass
          
        # create new order in databse with succesful payment
        with transaction.atomic():
            
            user_shipping_address = ShippingAddress.objects.get(owner=basket.owner.id)
            order = Order.objects.create(
                user=basket.owner,
                shipping_address_id=user_shipping_address.id, 
                total_price=total_amount,
                
            )
            order.trainers.set(basket.trainer.all())
      
      
                

        intent = stripe.PaymentIntent.create(
            amount=int(total_amount * 100),  
            currency='GBP',
            description='Payment for items in the basket'
        )
        return JsonResponse({'client_secret': intent.client_secret})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=403)