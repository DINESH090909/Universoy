# Generated by Django 3.1.6 on 2021-03-25 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0036_produit_au_menu'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='accompagnement',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AddField(
            model_name='produit',
            name='supplement',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
