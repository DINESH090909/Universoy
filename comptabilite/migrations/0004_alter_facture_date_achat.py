# Generated by Django 3.2.4 on 2021-06-15 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comptabilite', '0003_alter_facture_photo_facture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facture',
            name='date_achat',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
