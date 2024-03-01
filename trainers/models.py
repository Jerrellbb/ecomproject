from django.db import models

# Create your models here.
class Trainer(models.Model):
  name = models.CharField(max_length=100)
  colour = models.CharField(max_length=100)
  description = models.CharField(max_length=1000, null=True, blank=True)
  material = models.CharField(max_length=100, null=True, blank=True, default='Leather')
  in_stock = models.BooleanField(default=True)
  price = models.FloatField(default=0.00)
  brand = models.ForeignKey(to='categorys.Brand', related_name='Brand', on_delete=models.CASCADE, null=True,)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_trainers',
    null=True
  )
  size = models.PositiveIntegerField()
  images = models.ManyToManyField(to='trainers.TrainerImage', related_name='trainer_images', blank=True)

class TrainerImage(models.Model):
    
    image = models.URLField()
