import apiClient from './api-client';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'promotion' | 'reminder';
  date: string;
  read: boolean;
  priority: 'low' | 'normal' | 'high';
}

class NotificationService {
  // Get all notifications
  async getAllNotifications(filters?: { type?: string; read?: boolean; priority?: string }) {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    return apiClient.get(`/notifications?${params.toString()}`);
  }

  // Get notification by ID
  async getNotificationById(id: string) {
    return apiClient.get(`/notifications/${id}`);
  }

  // Mark notification as read
  async markAsRead(id: string) {
    return apiClient.put(`/notifications/${id}/read`);
  }

  // Mark all notifications as read
  async markAllAsRead() {
    return apiClient.put('/notifications/read-all');
  }

  // Delete notification
  async deleteNotification(id: string) {
    return apiClient.delete(`/notifications/${id}`);
  }
}

export default new NotificationService();
