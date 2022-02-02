# Generated by Django 3.1.6 on 2021-08-24 15:51

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0067_supplement_sup_family'),
    ]

    operations = [
        migrations.CreateModel(
            name='FormulaireContact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=26)),
                ('prenom', models.CharField(max_length=26)),
                ('email', models.EmailField(max_length=254)),
                ('telephone', models.CharField(max_length=20)),
                ('situation', models.CharField(max_length=26)),
                ('echeance', models.CharField(max_length=26)),
                ('ville', models.CharField(max_length=26)),
                ('apport', models.CharField(max_length=26)),
                ('message', models.TextField()),
                ('date_message', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
            ],
        ),
    ]