from django.http import JsonResponse
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Basket
from lib.views import OwnerListCreateView
from .serializers.common import BasketSerializer
from .serializers.populated import populatedBasketSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.permissions import IsOwnerOrReadOnly
from rest_framework import status
from rest_framework.response import Response
from trainers.models import Trainer

        
class BasketListCreateAPIView(OwnerListCreateView):
  queryset = Basket.objects.all()
  
  permission_classes = [IsAuthenticatedOrReadOnly]


  def get_serializer_class(self):
    if self.request.method == 'GET':
      return populatedBasketSerializer
    return BasketSerializer


# class BasketDetailView(RetrieveUpdateDestroyAPIView):
#   queryset = Basket.objects.all()
  
#   permission_classes = [IsOwnerOrReadOnly]

#   def get_serializer_class(self):
#     if self.request.method == 'PATCH':
#       return BasketSerializer
#     return populatedBasketSerializer

class BasketDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Basket.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get_serializer_class(self):
        if self.request.method == 'PATCH':
            return BasketSerializer
        return populatedBasketSerializer

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        
        
        trainer_id = request.data.get('trainer', None)
        
        # Handle adding the trainer to the basket
        if trainer_id:
            try:
                trainer_id = int(trainer_id[0])  # Convert to integer
                
                trainer = Trainer.objects.get(id=trainer_id)
                # Add the trainer to the basket if not already present
                if trainer not in instance.trainer.all():
                    instance.trainer.add(trainer)
            except (ValueError, Trainer.DoesNotExist):
                return Response({'detail': 'Invalid trainer ID'}, status=status.HTTP_400_BAD_REQUEST)
        
        
        instance.save()
        
        return Response(serializer.data, status=status.HTTP_200_OK)
