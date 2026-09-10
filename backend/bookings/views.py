from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Booking
from .serializers import BookingSerializer, OFFERED_ROOMS

ROOM_CATALOG = [
    {
        "id": "nordic-standard",
        "name": "Nordic Standard Suite",
        "category": "Standard",
        "size_m2": 38,
        "capacity": 2,
        "price_per_night": 240,
        "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "short_desc": "Cozy minimal sanctuary featuring warm oak paneling, king bed, and private forest-view balcony.",
        "amenities": ["Balcony", "Free Wi-Fi", "Espresso Machine", "Rain Shower"]
    },
    {
        "id": "deluxe-lakeview",
        "name": "Deluxe Lakeview Suite",
        "category": "Deluxe",
        "size_m2": 54,
        "capacity": 3,
        "price_per_night": 390,
        "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        "short_desc": "Panoramic floor-to-ceiling lake vistas, deep soaking stone bath, and fireplace.",
        "amenities": ["Lake View", "Fireplace", "Stone Tub", "Breakfast Included"]
    },
    {
        "id": "grand-haven",
        "name": "Grand Haven Suite",
        "category": "Suite",
        "size_m2": 72,
        "capacity": 4,
        "price_per_night": 580,
        "image": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        "short_desc": "Expansive two-room layout with Scandinavian lounge design, sauna, and private terrace.",
        "amenities": ["Private Sauna", "Lounge Area", "Terrace", "Butler Service"]
    },
    {
        "id": "forest-eco-villa",
        "name": "Forest Eco Villa",
        "category": "Villa",
        "size_m2": 95,
        "capacity": 5,
        "price_per_night": 820,
        "image": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        "short_desc": "Freestanding timber lodge embedded in pine woodland with private heated plunge pool.",
        "amenities": ["Plunge Pool", "Private Garden", "Kitchenette", "EV Charger"]
    },
    {
        "id": "royal-penthouse",
        "name": "Royal Penthouse Suite",
        "category": "Penthouse",
        "size_m2": 140,
        "capacity": 6,
        "price_per_night": 1250,
        "image": "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
        "short_desc": "The ultimate luxury statement with 360-degree resort views, private elevator, and chef service.",
        "amenities": ["Private Elevator", "360 Views", "Chef Service", "Helipad Access"]
    }
]

class BookingListCreateAPIView(APIView):
    def get(self, request):
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response({"count": bookings.count(), "bookings": serializer.data}, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            booking = serializer.save()
            return Response(
                {
                    "message": "Room booking request submitted successfully.",
                    "booking": serializer.data
                },
                status=status.HTTP_201_CREATED
            )
        return Response(
            {
                "errors": serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )

class RoomListAPIView(APIView):
    def get(self, request):
        return Response({"rooms": ROOM_CATALOG, "offered_names": OFFERED_ROOMS}, status=status.HTTP_200_OK)
