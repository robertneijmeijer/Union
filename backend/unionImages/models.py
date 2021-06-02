from django.db import models

# Create your models here.

class UnionImages(models.Model):
    union_id = models.CharField(null=False, primary_key=True, max_length=100)
    banner = models.TextField()
    icon = models.TextField()

