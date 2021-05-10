# Generated by Django 3.1.7 on 2021-05-03 14:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('unions', '0002_auto_20210421_1547'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Invitation',
            fields=[
                ('invite_id', models.AutoField(primary_key=True, serialize=False)),
                ('token', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('accepted_at', models.DateTimeField(null=True)),
                ('invite_acceptor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT,
                 related_name='invite_acceptor', to=settings.AUTH_USER_MODEL)),
                ('invite_creator', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT,
                 related_name='invite_creator', to=settings.AUTH_USER_MODEL)),
                ('union', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='unions.union')),
            ],
        ),
    ]
