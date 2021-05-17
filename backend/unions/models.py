from django.db import models

from users.models import User

# Create your models here.


class Union(models.Model):
    name = models.TextField(primary_key=True)
    description = models.TextField(blank=True)
    members_can_invite = models.BooleanField()
    icon = models.TextField(null=True)
    banner = models.TextField(null=True)
    creator = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name="creator", null=False)
    union_users = models.ManyToManyField(User, related_name="union_user")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
