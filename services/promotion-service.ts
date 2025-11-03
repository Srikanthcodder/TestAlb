import apiClient from './api-client';

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  validFrom: string;
  validUntil: string;
  discountPercentage?: number;
  minPurchase?: number;
  applicableProducts?: string[];
  featured: boolean;
}

class PromotionService {
  // Get all promotions
  async getAllPromotions(filters?: { featured?: boolean; active?: boolean }) {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    return apiClient.get(`/promotions?${params.toString()}`);
  }

  // Get promotion by ID
  async getPromotionById(id: string) {
    return apiClient.get(`/promotions/${id}`);
  }

  // Get featured promotions
  async getFeaturedPromotions() {
    return this.getAllPromotions({ featured: true });
  }

  // Get active promotions
  async getActivePromotions() {
    return this.getAllPromotions({ active: true });
  }
}

export default new PromotionService();
