from django.db import models

# Create your models here.
class Basket(models.Model):
  user = models.ForeignKey(to='users.User', on_delete=models.CASCADE)
  trainer = models.ForeignKey(to='trainers.Trainer', on_delete=models.CASCADE)
  is_active = models.BooleanField(default=True)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_basket',
    null=True
  )