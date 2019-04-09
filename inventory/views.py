from django.shortcuts import render
from django.http import Http404, HttpResponse, StreamingHttpResponse
from time import gmtime, strftime

from inventory.models import Item

def index(request):
    items = Item.objects.exclude(amount=0)
    return render(request, 'inventory/index.html', { 'items': items })

def cheatsheet(request):
    return render(request, 'inventory/html_cheatsheet.html')

def htmllayout(request):
    return render(request, 'inventory/html_layout.html')

def htmlforms(request):
    return render(request, 'inventory/htmlforms.html')

def htmlcanvas(request):
    return render(request, 'inventory/html_canvas.html')

def htmldragndrop(request):
    return render(request, 'inventory/html_dragndrop.html')

def webworker(request):
    return render(request, 'inventory/html_webworker.html')

def htmlsse(request):
    return render(request, 'inventory/html_server_side_events.html')

def time(request):
    str = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    response = StreamingHttpResponse("data: The time is: {0}\n\n".format(str), status=200, content_type='text/event-stream')
    response['Cache-Control'] = 'no-cache'
    return response

def item_detail(request, id):
    try:
        item = Item.objects.get(id=id)
    except Item.DoesNotExist:
        raise Http404('This item does not exist')
    return render(request, 'inventory/item_detail.html', { 'item': item })