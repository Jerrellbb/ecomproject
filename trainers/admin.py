from django.contrib import admin
from .models import Trainer, TrainerSizes, TrainerImage
# Register your models here.
admin.site.register(Trainer)
admin.site.register(TrainerSizes)
admin.site.register(TrainerImage)