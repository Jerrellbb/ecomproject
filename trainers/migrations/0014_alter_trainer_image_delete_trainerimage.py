# Generated by Django 5.0.2 on 2024-03-04 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trainers', '0013_remove_trainer_images_trainer_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trainer',
            name='image',
            field=models.URLField(),
        ),
        migrations.DeleteModel(
            name='TrainerImage',
        ),
    ]
