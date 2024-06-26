# Generated by Django 5.0.2 on 2024-03-04 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trainers', '0011_alter_trainer_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trainer',
            name='image',
        ),
        migrations.RemoveField(
            model_name='trainerimage',
            name='trainer',
        ),
        migrations.AddField(
            model_name='trainer',
            name='images',
            field=models.ManyToManyField(blank=True, related_name='trainer_images', to='trainers.trainerimage'),
        ),
    ]
