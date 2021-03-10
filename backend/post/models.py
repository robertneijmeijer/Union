from django.db import models


# Create your models here.
class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    title = models.TextField()
    message = models.TextField()
    upvotes = models.IntegerField()
    downvotes = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    # TODO: uncomment when the below models are made
    # user_id = models.ForeignKey(
    #     'user',
    #     on_delete=models.SET_NULL,
    #     null=True
    # )
    #
    # union_id = models.ForeignKey(
    #     'union',
    #     on_delete=models.PROTECTED,
    #     null=False
    # )
