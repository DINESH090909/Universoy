# Generated by Django 3.0 on 2021-05-07 14:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_remove_restaurant_company'),
    ]

    operations = [
        migrations.CreateModel(
            name='CaisseRetraite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('denomination', models.CharField(max_length=45)),
                ('adresse', models.CharField(max_length=45)),
                ('code_postal', models.CharField(max_length=5)),
                ('ville', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='Dirigeant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=45)),
                ('prenom', models.CharField(max_length=45)),
                ('adresse', models.CharField(max_length=45)),
                ('code_postal', models.CharField(max_length=5)),
                ('ville', models.CharField(max_length=45)),
                ('poste_occupe', models.CharField(max_length=45)),
                ('adresse_mail', models.EmailField(max_length=45)),
                ('num_tel', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Info_Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('disponibilite_restaurant', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Societe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('denomination', models.CharField(max_length=45)),
                ('adresse_siege', models.CharField(max_length=45)),
                ('code_postal_siege', models.CharField(max_length=5)),
                ('ville_siege', models.CharField(max_length=45)),
                ('SIRET_number', models.CharField(max_length=14)),
                ('etablissement', models.CharField(max_length=45)),
                ('adresse_etablissement', models.CharField(max_length=45)),
                ('code_postal_etablissement', models.CharField(max_length=5)),
                ('ville_etablissement', models.CharField(max_length=45)),
            ],
        ),
        migrations.AddField(
            model_name='restaurant',
            name='info_restaurant',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='main.Info_Restaurant'),
        ),
    ]