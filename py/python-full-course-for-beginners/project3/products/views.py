from django.http import HttpResponse
from django.shortcuts import render
from .models import Product  # Importing the "Product" class from "models.py" into "views.py" (".")


# Whenever there is an HTTP request to "/product", call this function
# URL = Uniform Resource Locator; Address
def index(request):  # By convention, "index" is defined as the main page of an app
    products = Product.objects.all()  # Collects ALL products from database
    return render(request, "index.html",  # Used to render templates
                  # Dictionary to be passed to the "index.html" template
                  {"products": products})  # Key name ("products") could be anything


def new(request):
    return HttpResponse("=-=New Products=-=")

