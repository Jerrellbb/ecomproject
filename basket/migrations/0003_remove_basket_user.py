# Generated by Django 5.0.2 on 2024-03-01 12:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('basket', '0002_basket_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='basket',
            name='user',
        ),
    ]