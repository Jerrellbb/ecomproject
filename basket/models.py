from django.db import models

# Create your models here.
class Basket(models.Model):
  
  trainer = models.ManyToManyField(to='trainers.Trainer', related_name='basket', blank=True)
  is_active = models.BooleanField(default=True)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_basket',
    null=True
  )

  def calculate_total_amount(self):
        total_amount = 0
        for trainer in self.trainer.all():
            
            total_amount += trainer.price
        return total_amount