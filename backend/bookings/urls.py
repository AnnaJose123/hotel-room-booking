from django.urls import path
from django.http import JsonResponse
from .views import BookingListCreateAPIView, RoomListAPIView

def api_index_view(request):
    return JsonResponse({
        "status": "online",
        "message": "Aura Resort & Spa API Root Endpoint",
        "available_endpoints": {
            "create_or_list_bookings": "/api/bookings/",
            "view_rooms_catalog": "/api/rooms/"
        },
        "frontend_website": "http://localhost:5173/"
    })

urlpatterns = [
    path('', api_index_view, name='api-index'),
    path('bookings/', BookingListCreateAPIView.as_view(), name='booking-list-create'),
    path('rooms/', RoomListAPIView.as_view(), name='room-list'),
]
