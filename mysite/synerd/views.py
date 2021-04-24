from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'synerd/index.html')

def registration(request):
    return render(request, 'synerd/registration.html')

def login(request):
    return render(request, 'synerd/login.html')
