# Generated by Django 3.1.6 on 2021-04-02 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0040_auto_20210331_1407'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='nom_accompagnement',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='produit',
            name='prix_supplement',
            field=models.FloatField(default=0, null=True),
        ),
    ]
