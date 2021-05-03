from django.db import models

from unions.models import Union
from users.models import User

# Create your models here.

# TODO: Check cascading
# TODO: Check indexing
class Invitation(models.Model):
    invite_id = models.AutoField(primary_key=True)
    invite_creator_id = models.ForeignKey(User, on_delete=models.PROTECT, null=False)
    invite_acceptor_id = models.ForeignKey(User, on_delete=models.PROTECT)
    union_id = models.ForeignKey(Union, on_delete=models.PROTECT, null=False)
    token = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)
    accepted_at = models.DateTimeField()

    def _accepted(self):
        return self.accepted_at is not None
        # TODO: Test this function

    def _generate_invite_token(self):
        return "TODO"