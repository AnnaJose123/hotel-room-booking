from django.urls import path
from django.http import JsonResponse
from .views import BookingListCreateAPIView, RoomListAPIView, BookingDetailAPIView

def api_index_view(request):
    return JsonResponse({
        "status": "online",
        "message": "Aura Resort & Spa API Root Endpoint",
        "available_endpoints": {
            "create_or_list_bookings": "/api/bookings/",
            "booking_detail_by_id": "/api/bookings/<id>/",
            "view_rooms_catalog": "/api/rooms/"
        },
        "frontend_website": "http://localhost:5173/"
    })

urlpatterns = [
    path('', api_index_view, name='api-index'),
    path('bookings/', BookingListCreateAPIView.as_view(), name='booking-list-create'),
    path('bookings/<int:pk>/', BookingDetailAPIView.as_view(), name='booking-detail'),
    path('rooms/', RoomListAPIView.as_view(), name='room-list'),
]
