from django.db.models import Model, TextField

# Create your models here.

class List(Model):
    firstName = TextField(max_length=255)
    lastName = TextField(max_length=255)
    