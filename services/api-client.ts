import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Base URL for the API
// Change this to your actual API URL when deploying
// For Android Emulator use: http://10.0.2.2:3000/api
// For iOS Simulator use: http://localhost:3000/api
// For Physical Device use: http://YOUR_COMPUTER_IP:3000/api
export const API_BASE_URL = 'http://192.168.1.5:3000/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    // const token = await AsyncStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
      return Promise.reject({ message: 'Network error. Please check your connection.' });
    } else {
      // Something else happened
      console.error('Error:', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

export default apiClient;
