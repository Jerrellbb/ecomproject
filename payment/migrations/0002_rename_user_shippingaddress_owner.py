# Generated by Django 5.0.2 on 2024-03-12 14:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shippingaddress',
            old_name='user',
            new_name='owner',
        ),
    ]
