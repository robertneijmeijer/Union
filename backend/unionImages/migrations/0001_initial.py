# Generated by Django 3.1.7 on 2021-06-03 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UnionImages',
            fields=[
                ('union_id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('banner', models.TextField()),
                ('icon', models.TextField()),
            ],
        ),
    ]