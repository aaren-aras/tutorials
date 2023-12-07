from django.urls import path
# We could just use "import views" but for larger projects, there may be several "views" modules/libraries
from . import views  # "." implies CURRENT folder (i.e., urls.py)


# URL Mapping: Routing incoming HTTP requests to specific backend services
urlpatterns = [
    path('', views.index),  # Passing reference, NOT calling; Django handles calling during runtime
    path('new', views.new)
]