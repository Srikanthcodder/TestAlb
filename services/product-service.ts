import apiClient from './api-client';

export interface Product {
  id: string;
  name: string;
  sku: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  warranty?: string;
  specialOffer?: boolean;
  image: string;
  stock: number;
  description: string;
  specifications: any;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface ProductFilters {
  category?: string;
  brand?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

export interface ProductsResponse {
  success: boolean;
  total: number;
  products: Product[];
}

export interface BrandsResponse {
  success: boolean;
  brands: Brand[];
}

export interface ProductResponse {
  success: boolean;
  product: Product;
}

class ProductService {
  // Get all products
  async getAllProducts(filters?: ProductFilters): Promise<ProductsResponse> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    return apiClient.get(`/products?${params.toString()}`);
  }

  // Get product by ID
  async getProductById(id: string): Promise<ProductResponse> {
    return apiClient.get(`/products/${id}`);
  }

  // Batteries
  async getBatteries(filters?: Omit<ProductFilters, 'category'>): Promise<ProductsResponse> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    return apiClient.get(`/products/batteries?${params.toString()}`);
  }

  async getBatteryBrands(): Promise<BrandsResponse> {
    return apiClient.get('/products/batteries/brands');
  }

  async getBatteryById(id: string): Promise<ProductResponse> {
    return apiClient.get(`/products/batteries/${id}`);
  }

  // Lubricants
  async getLubricants(filters?: Omit<ProductFilters, 'category'>): Promise<ProductsResponse> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    return apiClient.get(`/products/lubricants?${params.toString()}`);
  }

  async getLubricantBrands(): Promise<BrandsResponse> {
    return apiClient.get('/products/lubricants/brands');
  }

  async getLubricantById(id: string): Promise<ProductResponse> {
    return apiClient.get(`/products/lubricants/${id}`);
  }

  // Tires
  async getTires(filters?: Omit<ProductFilters, 'category'>): Promise<ProductsResponse> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    return apiClient.get(`/products/tires?${params.toString()}`);
  }

  async getTireBrands(): Promise<BrandsResponse> {
    return apiClient.get('/products/tires/brands');
  }

  async getTireById(id: string): Promise<ProductResponse> {
    return apiClient.get(`/products/tires/${id}`);
  }

  // Accessories
  async getAccessories(filters?: Omit<ProductFilters, 'category'>): Promise<ProductsResponse> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    return apiClient.get(`/products/accessories?${params.toString()}`);
  }

  async getAccessoryBrands(): Promise<BrandsResponse> {
    return apiClient.get('/products/accessories/brands');
  }

  async getAccessoryById(id: string): Promise<ProductResponse> {
    return apiClient.get(`/products/accessories/${id}`);
  }
}

export default new ProductService();
