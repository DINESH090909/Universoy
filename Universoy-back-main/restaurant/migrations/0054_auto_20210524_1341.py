# Generated by Django 3.1.6 on 2021-05-24 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0053_produit_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supplement',
            name='type_supplement',
            field=models.CharField(blank=True, choices=[('Pain', 'pain'), ('Viande', 'viande'), ('Sauce', 'sauce'), ('Crudite', 'crudite'), ('Fromage', 'Fromage')], max_length=100, null=True),
        ),
    ]
