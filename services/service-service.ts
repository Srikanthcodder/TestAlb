import apiClient from './api-client';

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  packages: ServicePackage[];
}

class ServiceService {
  // Get all services
  async getAllServices() {
    return apiClient.get('/services');
  }

  // Get service by ID
  async getServiceById(id: string) {
    return apiClient.get(`/services/${id}`);
  }

  // Get services by category
  async getServicesByCategory(category: string) {
    return apiClient.get(`/services/category/${category}`);
  }

  // Get service packages
  async getServicePackages(serviceId: string) {
    return apiClient.get(`/services/${serviceId}/packages`);
  }
}

export default new ServiceService();
