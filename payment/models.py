from django.db import models

# Create your models here.
class ShippingAddress(models.Model):
  owner = models.ForeignKey('users.User', on_delete=models.CASCADE, null=True, blank=True, related_name='shipping_address')
  full_name = models.CharField(max_length=255)
  address1 = models.CharField(max_length=255)
  address2 = models.CharField(max_length=255, null=True, blank=True)
  country = models.CharField(max_length=255)
  city = models.CharField(max_length=100)
  postcode = models.CharField(max_length=100)

  def __str__(self):
    return f'Shipping Address - ({self.id})'
