# Generated by Django 3.1.7 on 2021-05-31 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('unions', '0003_auto_20210531_1023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='union',
            name='description',
            field=models.TextField(),
        ),
    ]