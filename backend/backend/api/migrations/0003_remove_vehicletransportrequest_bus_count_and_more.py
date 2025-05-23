# Generated by Django 4.2.19 on 2025-02-28 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_vehicletransportrequest_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vehicletransportrequest',
            name='bus_count',
        ),
        migrations.RemoveField(
            model_name='vehicletransportrequest',
            name='final_sum',
        ),
        migrations.RemoveField(
            model_name='vehicletransportrequest',
            name='status',
        ),
        migrations.AddField(
            model_name='vehicletransportrequest',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
    ]
