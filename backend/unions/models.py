from django.db import models

from users.models import User

# Create your models here.


class Union(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    description = models.TextField(blank=True)
    members_can_invite = models.BooleanField()
    icon = models.TextField(null=True)
    banner = models.TextField(null=True)
    creator = models.ForeignKey(User, on_delete=models.PROTECT, related_name="creator", null=False)
    users = models.ManyToManyField(User, related_name="users", through="UnionUsers")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class UnionUsersManager(models.Manager):
    DEFAULT_INVITES_LEFT = 2

    def create(self, union: Union, user: User):
        entry = self.model(union=union, user=user, invites_left=self.DEFAULT_INVITES_LEFT)
        entry.save()
        return entry


class UnionUsers(models.Model):
    id = models.AutoField(primary_key=True)
    union = models.ForeignKey(Union, on_delete=models.PROTECT)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    invites_left = models.IntegerField(default=2)

    objects = UnionUsersManager()

    def __str__(self):
        return f"Union: {self.union.name} - " \
               f"User: {self.user.username} - " \
               f"InvitesLeft: {self.invites_left}"
