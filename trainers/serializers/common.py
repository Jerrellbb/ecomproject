from rest_framework import serializers
from ..models import Trainer, TrainerImage



class TrainerImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = TrainerImage
    fields = '__all__'

class TrainerSerializer(serializers.ModelSerializer):
  images = TrainerImageSerializer(many=True, required=False)
  
  class Meta:
    model = Trainer
    fields = '__all__'
  def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        trainer = Trainer.objects.create(**validated_data)
        for image_data in images_data:
            TrainerImage.objects.create(trainer=trainer, **image_data)
        return trainer
  


class BasketListTrainerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Trainer
    fields = ['name', 'price']