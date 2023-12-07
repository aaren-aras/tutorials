from django.db import models


# Models are representations of real-world concepts (e.g., customer, shopping cart, product, ...)
# Inheriting common model properties (e.g., store, read, and delete in/from database) from "Model" class
class Product(models.Model):
    name = models.CharField(max_length=255)  # Stores defined lengths of text as strings
    price = models.FloatField()
    stock = models.IntegerField()
    image_url = models.CharField(max_length=2083)  # Standard max. URL length


class Offer(models.Model):
    code = models.CharField(max_length=10)
    description = models.CharField(max_length=255)
    discount = models.FloatField()





