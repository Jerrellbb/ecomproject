# Generated by Django 5.0.2 on 2024-02-29 13:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categorys', '0001_initial'),
        ('trainers', '0002_trainer_price_trainersizes'),
    ]

    operations = [
        migrations.AddField(
            model_name='trainer',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Brand', to='categorys.brand'),
        ),
    ]
