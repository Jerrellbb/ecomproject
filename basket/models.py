from django.db import models

# Create your models here.
class Basket(models.Model):
  
  trainer = models.ManyToManyField(to='trainers.Trainer',  blank=True)
  is_active = models.BooleanField(default=True)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_basket',
    null=True
  )
