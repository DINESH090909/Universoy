# Generated by Django 3.2.4 on 2021-06-09 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('paiement', '0030_auto_20210609_1554'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='panier_produit',
            name='boisson',
        ),
        migrations.RemoveField(
            model_name='panier_produit',
            name='garniture',
        ),
        migrations.RemoveField(
            model_name='panier_produit',
            name='sauce',
        ),
        migrations.RemoveField(
            model_name='panier_produit',
            name='supplement',
        ),
    ]
