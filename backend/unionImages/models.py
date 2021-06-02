from django.db import models

# Create your models here.

class UnionImages(models.Model):
    id = models.AutoField(primary_key=True)
    union_id = models.IntegerField(null=False)
    banner = models.TextField()
    icon = models.TextField()

