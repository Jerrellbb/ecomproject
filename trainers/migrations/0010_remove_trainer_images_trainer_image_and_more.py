# Generated by Django 5.0.2 on 2024-03-04 17:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trainers', '0009_trainerimage_trainer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trainer',
            name='images',
        ),
        migrations.AddField(
            model_name='trainer',
            name='image',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='trainer_images', to='trainers.trainerimage'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='trainerimage',
            name='trainer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='trainers.trainer'),
        ),
    ]
