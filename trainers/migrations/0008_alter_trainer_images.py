# Generated by Django 5.0.2 on 2024-02-29 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trainers', '0007_remove_trainerimage_trainer_trainer_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trainer',
            name='images',
            field=models.ManyToManyField(blank=True, related_name='trainer_images', to='trainers.trainerimage'),
        ),
    ]
