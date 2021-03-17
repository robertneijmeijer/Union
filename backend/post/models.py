from django.db import models

from union.models import Union
from users.models import User


# Create your models here.
class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    title = models.TextField()
    message = models.TextField()
    upvotes = models.IntegerField()
    downvotes = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    union_id = models.ForeignKey(Union, on_delete=models.PROTECT, null=False)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
