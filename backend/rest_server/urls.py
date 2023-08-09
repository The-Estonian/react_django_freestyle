from django.urls import path

from .views import List, Send

urlpatterns = [
    path('list/', List),
    path('send/', Send),
]
