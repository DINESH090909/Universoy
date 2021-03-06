# Generated by Django 3.1.6 on 2021-05-19 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('paiement', '0024_api_keys'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='panier_produit',
            name='produit',
        ),
        migrations.RenameField(
            model_name='commande',
            old_name='livraison',
            new_name='methode_vente',
        ),
        migrations.RemoveField(
            model_name='panier',
            name='menus',
        ),
        migrations.RemoveField(
            model_name='panier',
            name='produits',
        ),
        migrations.AddField(
            model_name='panier',
            name='infos_produits',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='commande',
            name='client',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='paiement.client'),
        ),
        migrations.DeleteModel(
            name='Panier_menu',
        ),
        migrations.DeleteModel(
            name='Panier_produit',
        ),
    ]
