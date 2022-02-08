# Generated by Django 3.1.6 on 2021-02-16 10:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient_info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Produit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=20, unique=True)),
                ('description', models.TextField(null=True)),
                ('image_url', models.CharField(max_length=2048)),
                ('categorie', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='restaurant.categorie')),
                ('ingredients', models.ManyToManyField(to='restaurant.Ingredient')),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=20, unique=True)),
                ('description', models.TextField(null=True)),
                ('image_url', models.CharField(max_length=2048)),
                ('produits', models.ManyToManyField(to='restaurant.Produit')),
            ],
        ),
        migrations.AddField(
            model_name='ingredient',
            name='ingredient_info',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='restaurant.ingredient_info'),
        ),
    ]