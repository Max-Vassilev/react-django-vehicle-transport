# Generated by Django 4.2.19 on 2025-02-28 07:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_vehicletransportrequest_bus_count_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vehicletransportrequest',
            name='phone',
        ),
    ]
