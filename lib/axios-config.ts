import axios, { AxiosRequestConfig } from 'axios';

// Create a custom axios instance with ngrok bypass headers
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Additional headers that might help with ngrok
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache'
  },
});

// Request interceptor to ensure headers are always set
apiClient.interceptors.request.use(
  (config) => {
    // Ensure ngrok bypass headers are always present
    // if (config.headers) {
    //   config.headers['User-Agent'] = 'Mozilla/5.0 (compatible; NextJS-Client/1.0)';
    //   config.headers['ngrok-skip-browser-warning'] = 'true';
    // }

    // Automatically add user token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for better error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Log ngrok-related errors
    if (error.response?.data && typeof error.response.data === 'string' && error.response.data.includes('ngrok')) {
      console.warn('Ngrok warning page detected in response');
    }

    // Handle authentication errors
    if (error.response?.status === 401) {
      console.warn('Authentication failed - token may be expired');
      // Optionally clear the token and redirect to login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // You can add redirect logic here if needed
        // window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

// Export the configured axios instance
export default apiClient;

// Also export individual methods for convenience
export const apiGet = (url: string, config?: AxiosRequestConfig) => apiClient.get(url, config);
export const apiPost = (url: string, data?: any, config?: AxiosRequestConfig) => apiClient.post(url, data, config);
export const apiPut = (url: string, data?: any, config?: AxiosRequestConfig) => apiClient.put(url, data, config);
export const apiDelete = (url: string, config?: AxiosRequestConfig) => apiClient.delete(url, config);
export const apiPatch = (url: string, data?: any, config?: AxiosRequestConfig) => apiClient.patch(url, data, config);

// Export the original axios for cases where you need the raw instance
export { axios as rawAxios };

// Helper function to manually set token (useful for testing or manual token management)
export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

// Helper function to get current token
export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Helper function to check if user is authenticated
export const isAuthenticated = (): boolean => {
  const token = getAuthToken();
  return !!token;
}; 