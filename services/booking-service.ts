import apiClient from './api-client';

export interface VehicleInfo {
  make: string;
  model: string;
  year: number;
  plateNumber: string;
}

export interface Location {
  address: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  branchId?: string;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  packageId: string;
  serviceName: string;
  packageName: string;
  price: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  scheduledDate: string;
  scheduledTime: string;
  location: Location;
  vehicleInfo: VehicleInfo;
  completedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
  rating?: number;
  review?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBookingData {
  userId: string;
  serviceId: string;
  packageId: string;
  serviceName: string;
  packageName: string;
  price: number;
  scheduledDate: string;
  scheduledTime: string;
  location: Location;
  vehicleInfo: VehicleInfo;
}

class BookingService {
  // Get all bookings
  async getAllBookings(filters?: { status?: string; userId?: string }) {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params.append(key, value);
        }
      });
    }
    return apiClient.get(`/bookings?${params.toString()}`);
  }

  // Get booking by ID
  async getBookingById(id: string) {
    return apiClient.get(`/bookings/${id}`);
  }

  // Create new booking
  async createBooking(data: CreateBookingData) {
    return apiClient.post('/bookings', data);
  }

  // Update booking status
  async updateBookingStatus(id: string, status: string) {
    return apiClient.put(`/bookings/${id}/status`, { status });
  }

  // Cancel booking
  async cancelBooking(id: string, reason?: string) {
    return apiClient.put(`/bookings/${id}/cancel`, { reason });
  }

  // Add review to completed booking
  async addReview(id: string, rating: number, review: string) {
    return apiClient.put(`/bookings/${id}/review`, { rating, review });
  }

  // Delete booking
  async deleteBooking(id: string) {
    return apiClient.delete(`/bookings/${id}`);
  }
}

export default new BookingService();
