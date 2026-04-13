/**
 * API Service for communicating with the backend
 * Handles all HTTP requests to the FastAPI backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Makes a fetch request to the backend API
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Fetch options
 * @returns {Promise} - API response
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
};

/**
 * Yield Prediction API
 */
export const yieldApi = {
  /**
   * Get yield prediction based on historical data
   * @param {object} data - Crop yield data
   * @returns {Promise} - Predicted yield
   */
  predict: async (data) => {
    return apiRequest('/predict', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

/**
 * Weather API
 */
export const weatherApi = {
  /**
   * Get weather by city name
   * @param {string} city - City name
   * @returns {Promise} - Weather data
   */
  byCity: async (city) => {
    return apiRequest(`/weather?city=${encodeURIComponent(city)}`);
  },
  
  /**
   * Get weather by coordinates
   * @param {number} lat - Latitude
   * @param {number} lon - Longitude
   * @returns {Promise} - Weather data
   */
  byLocation: async (lat, lon) => {
    return apiRequest(`/weather?lat=${lat}&lon=${lon}`);
  },
};

export default apiRequest;