from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root_view(request):
    return JsonResponse({
        "status": "online",
        "service": "Aura Resort & Spa Backend REST API",
        "frontend_url": "http://localhost:5173/",
        "endpoints": {
            "rooms": "/api/rooms/",
            "bookings": "/api/bookings/",
            "admin": "/admin/"
        },
        "note": "To view the Aura Resort & Spa website UI, please open http://localhost:5173/ in your browser."
    })

urlpatterns = [
    path('', api_root_view, name='root-api'),
    path('admin/', admin.site.urls),
    path('api/', include('bookings.urls')),
]
