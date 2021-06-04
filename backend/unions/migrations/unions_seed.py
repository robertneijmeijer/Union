# Generated by Django 3.1.7 on 2021-06-04 16:30
import logging
from random import random

from django.db import migrations
from django.utils.timezone import now

from unions.models import Union
from unions.serializer import UnionSerializer
from users.models import User


def create_unions(a, b):
    """Create unions"""
    logging.info("Creating unions")
    # sha256 hash of 'testpass'
    titles = ["a", "b", "c", "d", "e", "f"]
    description = ["aa", "bb", "cc", "dd", "ee", "ff"]

    for i in range(len(titles)):
        union = {
            "name": titles[i],
            "description": description[i],
            "members_can_invite": True if random() > 0.5 else False,
            "icon": "https://banner2.cleanpng.com/20180123/gjq/kisspng-bitcoin-cash-cryptocurrency-icon-5a68081d193577.7421991315167672611033.jpg",
            "banner": "https://i1.wp.com/www.snowdropsolution.com/wp-content/uploads/2020/09/4-Simple-Use-Of-Natural-Language-Processing-In-Businesses.jpg?resize=640%2C360&ssl=1",
            "creator_id": User.objects.all().first().user_id,
            "created_at": now()
        }

        ser = UnionSerializer(data=union)
        ser.is_valid(raise_exception=True)
        ser.save()
        logging.info(f"{union} union created.")

    return True


class Migration(migrations.Migration):
    dependencies = [
        ('unions', '0002_auto_20210603_1103'),
        ('users', 'users_seed'),
    ]

    operations = [
        migrations.RunPython(create_unions),
    ]
