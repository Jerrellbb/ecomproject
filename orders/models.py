from datetime import timezone
from django.db import models

# Create your models here.
class Order(models.Model):
    
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    shipping_address = models.ForeignKey('payment.ShippingAddress', on_delete=models.CASCADE)
    trainers = models.ManyToManyField(to='trainers.Trainer', related_name='orderd_trainers', blank=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    order_fulfilled = models.BooleanField(default=False)

    def __str__(self):
        return f'order NO. - ({self.id})'
    
  
        