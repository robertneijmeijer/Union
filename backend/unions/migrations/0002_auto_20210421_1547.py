# Generated by Django 3.1.7 on 2021-04-21 13:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('unions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='union',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT,
                                    related_name='creator', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='union',
            name='union_users',
            field=models.ManyToManyField(related_name='union_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
