# Generated by Django 3.2 on 2022-08-19 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20220819_1321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hm',
            name='no_honours',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='hm',
            name='no_minors',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]