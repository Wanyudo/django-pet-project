"""firstdjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from inventory import views

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^cheatsheet/$', views.cheatsheet, name='cheatsheet'),
	url(r'^htmlforms/$', views.htmlforms, name='htmlforms'),
	url(r'^dragndrop/$', views.htmldragndrop, name='htmldragndrop'),
	url(r'^webworker/$', views.webworker, name='webworker'),
	url(r'^sse/$', views.htmlsse, name='sse'),
	url(r'^time/$', views.time, name='time'),
	url(r'^htmlcanvas/$', views.htmlcanvas, name='htmlcanvas'),
	url(r'^html_layout/$', views.htmllayout, name='htmllayout'),
	url(r'^item/(?P<id>\d+)/', views.item_detail, name='item_detail'),
    url(r'^admin/', admin.site.urls),
]
