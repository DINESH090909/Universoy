# Generated by Django 3.1.6 on 2021-04-02 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paiement', '0020_panier_produit_accompagement'),
    ]

    operations = [
        migrations.AlterField(
            model_name='panier_produit',
            name='accompagement',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
