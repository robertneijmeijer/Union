from django.db import models

from users.models import User


# Create your models here.
class Union(models.Model):
    union_id = models.AutoField(primary_key=True)
    name = models.TextField()
    description = models.TextField()
    members_can_invite = models.BooleanField()
    icon = models.TextField(null=True)
    banner = models.TextField(null=True)
    creator = models.ForeignKey(User, on_delete=models.PROTECT, null=False, related_name="creator")
    union_users = models.ManyToManyField(User, related_name="union_user")
    created_at = models.DateTimeField(auto_now_add=True)

