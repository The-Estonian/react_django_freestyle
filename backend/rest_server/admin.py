from django.contrib.admin import ModelAdmin, register
from .models import List_items

# Register your models here.

@register(List_items)
class List_items_Admin(ModelAdmin):
    list_display = ["firstName"]
