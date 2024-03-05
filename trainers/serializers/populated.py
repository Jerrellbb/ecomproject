from .common import TrainerSerializer
from users.serializers.common import TrainerListUserSerializer
from categorys.serializers.common import BrandSerializer


class TrainerListSerializer(TrainerSerializer):
  owner = TrainerListUserSerializer()
  brand = BrandSerializer()
  
