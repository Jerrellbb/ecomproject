from django.shortcuts import render
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth import get_user_model
from .serializers.common import RegistrationSerializer, UserSerializer
from lib.permissions import IsOwnerOrReadOnly

# Create your views here.
User = get_user_model()
# Create your views here.
class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer

class UserSingleView(RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsOwnerOrReadOnly]