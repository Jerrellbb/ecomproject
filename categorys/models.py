from django.db import models
from django.utils.text import slugify
# Create your models here.
class Brand(models.Model):
  name = models.CharField(max_length=100)
  slug = models.SlugField(blank=True, null=True)

  def __str__(self):
    return f'{self.name}'
  

  def save(self, *args, **kwargs):
    self.name = slugify(self.name)
    super().save(*args, **kwargs)


