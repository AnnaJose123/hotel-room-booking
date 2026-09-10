from django.db import models

class Booking(models.Model):
    ROOM_CHOICES = [
        ('Nordic Standard Suite', 'Nordic Standard Suite'),
        ('Deluxe Lakeview Suite', 'Deluxe Lakeview Suite'),
        ('Grand Haven Suite', 'Grand Haven Suite'),
        ('Forest Eco Villa', 'Forest Eco Villa'),
        ('Royal Penthouse Suite', 'Royal Penthouse Suite'),
    ]

    name = models.CharField(max_length=120, help_text="Full name of primary guest")
    phone = models.CharField(max_length=30, help_text="Contact phone number")
    room = models.CharField(max_length=60, choices=ROOM_CHOICES, help_text="Selected room type")
    check_in = models.DateField(help_text="Check-in date")
    check_out = models.DateField(help_text="Check-out date")
    guests = models.PositiveIntegerField(default=1, help_text="Number of guests")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Booking #{self.id} - {self.name} ({self.room})"
