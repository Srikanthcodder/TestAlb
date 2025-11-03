import apiClient from './api-client';

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  plateNumber: string;
  color: string;
  isPrimary: boolean;
}

export interface Address {
  building: string;
  block: string;
  street: string;
  area: string;
  city: string;
}

export interface UserPreferences {
  language: string;
  notifications: boolean;
  newsletter: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: Address;
  vehicles: Vehicle[];
  preferences: UserPreferences;
  stats: {
    totalOrders: number;
    totalBookings: number;
    totalSpent: number;
    memberSince: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfileData {
  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: Partial<Address>;
  preferences?: Partial<UserPreferences>;
}

export interface AddVehicleData {
  userId?: string;
  make: string;
  model: string;
  year: number;
  plateNumber: string;
  color: string;
  isPrimary?: boolean;
}

class UserService {
  // Get user profile
  async getUserProfile(userId?: string) {
    const params = userId ? `?userId=${userId}` : '';
    return apiClient.get(`/user/profile${params}`);
  }

  // Update user profile
  async updateProfile(data: UpdateProfileData) {
    return apiClient.put('/user/profile', data);
  }

  // Get user vehicles
  async getVehicles(userId?: string) {
    const params = userId ? `?userId=${userId}` : '';
    return apiClient.get(`/user/vehicles${params}`);
  }

  // Add vehicle
  async addVehicle(data: AddVehicleData) {
    return apiClient.post('/user/vehicles', data);
  }

  // Update vehicle
  async updateVehicle(vehicleId: string, data: Partial<AddVehicleData>) {
    return apiClient.put(`/user/vehicles/${vehicleId}`, data);
  }

  // Delete vehicle
  async deleteVehicle(vehicleId: string, userId?: string) {
    const params = userId ? `?userId=${userId}` : '';
    return apiClient.delete(`/user/vehicles/${vehicleId}${params}`);
  }
}

export default new UserService();
