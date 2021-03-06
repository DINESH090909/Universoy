# Generated by Django 3.2.4 on 2021-06-08 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0062_auto_20210528_1044'),
    ]

    operations = [
        migrations.CreateModel(
            name='SupplementViande1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100, unique=True)),
                ('type_supplement', models.CharField(blank=True, choices=[('Viande1', 'viande1')], max_length=100, null=True)),
                ('prix', models.FloatField(blank=True, default=0)),
                ('disponibilite', models.BooleanField(default=False, null=True)),
                ('sup_tacos', models.BooleanField(default=False, null=True)),
                ('sup_mix_viande', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SupplementViande2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100, unique=True)),
                ('type_supplement', models.CharField(blank=True, choices=[('Viande2', 'viande2')], max_length=100, null=True)),
                ('prix', models.FloatField(blank=True, default=0)),
                ('disponibilite', models.BooleanField(default=False, null=True)),
                ('sup_tacos', models.BooleanField(default=False, null=True)),
                ('sup_mix_viande', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SupplementViande3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100, unique=True)),
                ('type_supplement', models.CharField(blank=True, choices=[('Viande3', 'viande3')], max_length=100, null=True)),
                ('prix', models.FloatField(blank=True, default=0)),
                ('disponibilite', models.BooleanField(default=False, null=True)),
                ('sup_tacos', models.BooleanField(default=False, null=True)),
                ('sup_mix_viande', models.BooleanField(default=False, null=True)),
            ],
        ),
    ]
