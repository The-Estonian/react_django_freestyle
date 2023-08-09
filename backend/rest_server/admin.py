from django.contrib.admin import ModelAdmin, register
from .models import List

# Register your models here.

@register(List)
class ListAdmin(ModelAdmin):
    list_display = ["firstName"]
