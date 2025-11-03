import apiClient from './api-client';

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  workingHours: {
    [key: string]: string;
  };
  services: string[];
  facilities: string[];
  manager: string;
  rating: number;
  totalReviews: number;
  image: string;
}

class BranchService {
  // Get all branches
  async getAllBranches(filters?: { city?: string; service?: string }) {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params.append(key, value);
        }
      });
    }
    return apiClient.get(`/branches?${params.toString()}`);
  }

  // Get branch by ID
  async getBranchById(id: string) {
    return apiClient.get(`/branches/${id}`);
  }

  // Get nearest branch
  async getNearestBranch(latitude: number, longitude: number) {
    return apiClient.post('/branches/nearest', { latitude, longitude });
  }
}

export default new BranchService();
