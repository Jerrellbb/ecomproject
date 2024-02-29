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

class TrainerSizes(models.Model):
  trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
  size = models.PositiveIntegerField()

  class Meta:
        unique_together = ('trainer', 'size')

class TrainerImage(models.Model):
    trainer = models.ManyToManyField(Trainer, related_name='trainer_images')
    image = models.URLField()
