from django.shortcuts import render
from django.core import serializers 
from django.http.response import JsonResponse
from django.http import HttpResponse
from .models import List_items
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def List(request):
    fullList = List_items.objects.all()
    returnList = serializers.serialize("python", fullList)
    return JsonResponse(returnList, safe=False)

@csrf_exempt
def Send(request):
    print(request.POST["firstName"])
    print(request.POST["lastName"])
    newEntry = List_items.objects.create(firstName=request.POST["firstName"], lastName=request.POST["lastName"])
    newEntry.save()
    return HttpResponse("<html><body>Connection</body></html>")