# Generated by Django 4.1 on 2022-08-23 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_selected_hm_hpriority_selected_hm_mpriority'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='selected_hm',
            name='id',
        ),
        migrations.AlterField(
            model_name='selected_hm',
            name='ssid',
            field=models.CharField(max_length=20, primary_key=True, serialize=False),
        ),
    ]
