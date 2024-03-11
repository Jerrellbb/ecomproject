from .common import BasketSerializer
from trainers.models import Trainer
from trainers.serializers.common import BasketListTrainerSerializer
from users.serializers.common import TrainerListUserSerializer


class populatedBasketSerializer(BasketSerializer):
  trainer = BasketListTrainerSerializer(many=True, read_only=True)
  owner = TrainerListUserSerializer()


