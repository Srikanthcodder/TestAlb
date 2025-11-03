// Central export for all services
export { API_BASE_URL, default as apiClient } from './api-client';
export { default as bookingService } from './booking-service';
export { default as branchService } from './branch-service';
export { default as notificationService } from './notification-service';
export { default as productService } from './product-service';
export { default as promotionService } from './promotion-service';
export { default as serviceService } from './service-service';
export { default as userService } from './user-service';

// Export types
export type { Booking, CreateBookingData, Location, VehicleInfo } from './booking-service';
export type { Branch } from './branch-service';
export type { Notification } from './notification-service';
export type { Brand, Product, ProductFilters } from './product-service';
export type { Promotion } from './promotion-service';
export type { Service, ServicePackage } from './service-service';
export type { AddVehicleData, Address, UpdateProfileData, User, UserPreferences, Vehicle } from './user-service';

