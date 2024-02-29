from django.contrib import admin
from .models import Trainer, TrainerSizes
# Register your models here.
admin.register(Trainer, TrainerSizes)