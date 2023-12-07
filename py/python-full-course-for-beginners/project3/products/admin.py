from django.contrib import admin
from .models import Product, Offer


# Inheriting common functionalities for managing models via admin panel from "ModelAdmin" class
class ProductAdmin(admin.ModelAdmin):  # Convention to append model name to "Admin" for class name
    list_display = ("name", "price", "stock")  # Changes how products are presented under Products tab


class OfferAdmin(admin.ModelAdmin):
    list_display = ("code", "discount")


# Using admin object to access site object with "register" method
admin.site.register(Product, ProductAdmin)  # Adds new tab/table to Django admin panel titled "Product"
admin.site.register(Offer, OfferAdmin)

# Superusers: "The most powerful user with permissions to create, read, update, and delete admin data
# in the Django admin, which includes model records and other users"; "python manage.py createsuperuser"


