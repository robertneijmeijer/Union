from django.db import models

from unions.models import Union
from users.models import User

import uuid


class Invitation(models.Model):
    invite_id = models.AutoField(primary_key=True)
    invite_creator = models.ForeignKey(User, on_delete=models.PROTECT, null=False, related_name='invite_creator')
    invite_acceptor = models.ForeignKey(User, on_delete=models.PROTECT, null=True, related_name='invite_acceptor')
    union = models.ForeignKey(Union, on_delete=models.PROTECT, null=False, db_index=True)
    token = models.CharField(max_length=255, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    accepted_at = models.DateTimeField(null=True)

    def can_be_accepted(self):
        return self.accepted_at is None

    @staticmethod
    def generate_invite_token():
        return uuid.uuid1()

    def __str__(self):
        status = "Open"
        if self.accepted_at is not None:
            status = "Accepted"
        return str(self.union.name) + " - " + self.token + " - " + status
