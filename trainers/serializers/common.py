from rest_framework import serializers
from ..models import Trainer, TrainerSizes, TrainerImage


class TrainerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Trainer
    fields = '__all__'

class TrainerSizesSerializer(serializers.ModelSerializer):
  class Meta:
    model = TrainerSizes
    fields = '__all__'

class TrainerImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = TrainerImage
    fields = ['image']