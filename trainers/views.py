from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Trainer,  TrainerImage
from .serializers.common import TrainerSerializer,  TrainerImageSerializer
from .serializers.populated import TrainerListSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.permissions import IsOwnerOrReadOnly
from lib.views import OwnerListCreateView

# Create your views here.
class TrainerListCreateAPIView(OwnerListCreateView):
  queryset = Trainer.objects.all()
  permission_classes = [IsAuthenticatedOrReadOnly]


  def get_serializer_class(self):
    if self.request.method == 'GET':
      return TrainerListSerializer
    return TrainerSerializer


class TrainerDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Trainer.objects.all()
  serializer_class = TrainerSerializer
  permission_classes = [IsOwnerOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'PATCH':
      return TrainerSerializer
    return TrainerListSerializer

