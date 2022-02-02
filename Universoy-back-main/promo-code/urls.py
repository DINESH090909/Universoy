from django.urls import path
from .views import *
from . import views

app_name = 'promotionApi'


urlpatterns = [
    # /promo-code/
    path('', views.index),# default page
    path('get', views.get),# retrieve all promotion code
    path('get/<str:code>', views.checkCode),# check the promo code
]
