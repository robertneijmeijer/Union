from django.db import models

from unions.models import Union
from users.models import User

# Create your models here.

# TODO: Check cascading
# TODO: Check indexing
class Invitation(models.Model):
    invite_id = models.AutoField(primary_key=True)
    invite_creator = models.ForeignKey(User, on_delete=models.PROTECT, null=False, related_name='invite_creator')
    invite_acceptor = models.ForeignKey(User, on_delete=models.PROTECT, null=True, related_name='invite_acceptor', )
    union = models.ForeignKey(Union, on_delete=models.PROTECT, null=False)
    token = models.CharField(max_length=255, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    accepted_at = models.DateTimeField(null=True)

    @staticmethod
    def generate_invite_token():
        return "TODO:CREATE_TOKEN"
    def __str__(self):
        status = "Open"
        if self.accepted_at is not None:
            status = "Accepted"
        return str(self.union.name) + " - " + self.token + " - " + status
