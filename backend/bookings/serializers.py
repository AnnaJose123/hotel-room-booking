import re
from datetime import date
from rest_framework import serializers
from .models import Booking

OFFERED_ROOMS = [
    'Nordic Standard Suite',
    'Deluxe Lakeview Suite',
    'Grand Haven Suite',
    'Forest Eco Villa',
    'Royal Penthouse Suite'
]

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'name', 'phone', 'room', 'check_in', 'check_out', 'guests', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_name(self, value):
        cleaned_name = value.strip() if value else ''
        if not cleaned_name:
            raise serializers.ValidationError("Customer name is required.")
        if len(cleaned_name) < 2:
            raise serializers.ValidationError("Name must be at least 2 characters long.")
        return cleaned_name

    def validate_phone(self, value):
        cleaned_phone = value.strip() if value else ''
        if not cleaned_phone:
            raise serializers.ValidationError("Phone number is required.")
        # Validate phone pattern permitting international formats like +45 12 34 56 78 or (555) 000-1234
        phone_regex = r'^\+?[0-9\s\-()]{7,20}$'
        if not re.match(phone_regex, cleaned_phone):
            raise serializers.ValidationError("Please enter a valid phone number (e.g. +45 80 12 34 56 or 555-0199).")
        return cleaned_phone

    def validate_room(self, value):
        cleaned_room = value.strip() if value else ''
        if not cleaned_room:
            raise serializers.ValidationError("Please select or enter a room type.")
        return cleaned_room

    def validate_guests(self, value):
        if value is None or value < 1:
            raise serializers.ValidationError("Number of guests must be at least 1.")
        if value > 10:
            raise serializers.ValidationError("Maximum guest capacity per reservation is 10 guests.")
        return value

    def validate(self, data):
        check_in = data.get('check_in')
        check_out = data.get('check_out')

        if check_in and check_out:
            if check_out <= check_in:
                raise serializers.ValidationError({
                    'check_out': "Check-out date must be after check-in date."
                })

            today = date.today()
            if check_in < today:
                raise serializers.ValidationError({
                    'check_in': "Check-in date cannot be in the past."
                })

        return data
