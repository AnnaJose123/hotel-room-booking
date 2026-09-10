from django.urls import path
from .views import BookingListCreateAPIView, RoomListAPIView

urlpatterns = [
    path('bookings/', BookingListCreateAPIView.as_view(), name='booking-list-create'),
    path('rooms/', RoomListAPIView.as_view(), name='room-list'),
]
