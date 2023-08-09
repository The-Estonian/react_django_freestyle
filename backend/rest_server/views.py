from django.shortcuts import render
from django.core import serializers 
from django.http.response import JsonResponse
from django.http import HttpResponse
from .models import List

# Create your views here.

def List(request):
    fullList = List.objects.all()
    returnList = serializers.serialize("python", fullList)
    return JsonResponse(returnList, safe=False)

def Send(request):
    print(request.method)
    return HttpResponse("<html><body>Connection</body></html>")