# Generated by Django 3.1.6 on 2021-04-03 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paiement', '0022_auto_20210402_1318'),
    ]

    operations = [
        migrations.AddField(
            model_name='commande',
            name='livraison',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
