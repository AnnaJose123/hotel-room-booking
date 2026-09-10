from datetime import date, timedelta
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Booking

class BookingAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.today = date.today()
        self.tomorrow = self.today + timedelta(days=1)
        self.day_after = self.today + timedelta(days=2)

    def test_create_valid_booking(self):
        payload = {
            "name": "Anna Jose",
            "phone": "+45 80 12 34 56",
            "room": "Deluxe Lakeview Suite",
            "check_in": self.tomorrow.strftime("%Y-%m-%d"),
            "check_out": self.day_after.strftime("%Y-%m-%d"),
            "guests": 2
        }
        response = self.client.post('/api/bookings/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn("message", response.data)
        self.assertEqual(response.data["message"], "Room booking request submitted successfully.")
        self.assertEqual(Booking.objects.count(), 1)

    def test_invalid_checkout_before_checkin(self):
        payload = {
            "name": "Anna Jose",
            "phone": "+45 80 12 34 56",
            "room": "Deluxe Lakeview Suite",
            "check_in": self.day_after.strftime("%Y-%m-%d"),
            "check_out": self.tomorrow.strftime("%Y-%m-%d"),
            "guests": 2
        }
        response = self.client.post('/api/bookings/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("errors", response.data)
        self.assertIn("check_out", response.data["errors"])

    def test_invalid_phone_format(self):
        payload = {
            "name": "Anna Jose",
            "phone": "invalid-phone",
            "room": "Deluxe Lakeview Suite",
            "check_in": self.tomorrow.strftime("%Y-%m-%d"),
            "check_out": self.day_after.strftime("%Y-%m-%d"),
            "guests": 2
        }
        response = self.client.post('/api/bookings/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("errors", response.data)
        self.assertIn("phone", response.data["errors"])

    def test_empty_room_choice(self):
        payload = {
            "name": "Anna Jose",
            "phone": "+45 80 12 34 56",
            "room": "",
            "check_in": self.tomorrow.strftime("%Y-%m-%d"),
            "check_out": self.day_after.strftime("%Y-%m-%d"),
            "guests": 2
        }
        response = self.client.post('/api/bookings/', payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("errors", response.data)
        self.assertIn("room", response.data["errors"])

    def test_get_rooms_catalog(self):
        response = self.client.get('/api/rooms/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("rooms", response.data)
        self.assertGreaterEqual(len(response.data["rooms"]), 3)

    def test_api_root_index(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_endpoint_index(self):
        response = self.client.get('/api/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
