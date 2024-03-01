from django.http import JsonResponse

from .models import Basket
from lib.views import OwnerListCreateView

class AddToBasketView(OwnerListCreateView):
    def post(self, request, trainer_id):
        user = request.user
        existing_basket = Basket.objects.filter(user=user, is_active=True).first()

        if existing_basket:
            # Update existing basket
            existing_basket.trainers.add(trainer_id)
            return JsonResponse({'message': 'Trainer added to existing basket.'}, status=200)
        else:
            # Create new basket
            new_basket = Basket.objects.create(user=user, is_active=True)
            new_basket.trainers.add(trainer_id)
            return JsonResponse({'message': 'New basket created and trainer added.'}, status=201)
