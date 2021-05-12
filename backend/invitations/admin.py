from django.contrib import admin

# Register your models here.
from invitations.models import Invitation

admin.site.register(Invitation)
