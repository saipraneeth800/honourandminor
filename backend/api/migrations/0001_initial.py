# Generated by Django 3.2 on 2022-08-17 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FileStorage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sdata', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='StudentData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sid', models.CharField(max_length=15)),
                ('sname', models.CharField(max_length=30)),
                ('sdept', models.CharField(max_length=30)),
                ('scgpa', models.FloatField()),
            ],
        ),
    ]