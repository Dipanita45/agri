/**
 * Utility functions for data validation and formatting
 */

/**
 * Validates yield input data
 * @param {object} data - Yield data object
 * @returns {object} - Validation result with isValid and errors
 */
export const validateYieldData = (data) => {
  const errors = [];
  
  if (!data.crop || typeof data.crop !== 'string') {
    errors.push('Crop type is required');
  }
  
  const yieldFields = ['yield_2019_20', 'yield_2020_21', 'yield_2021_22', 'yield_2022_23'];
  
  yieldFields.forEach(field => {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      errors.push(`${field} is required`);
    } else if (typeof data[field] !== 'number' || data[field] < 0) {
      errors.push(`${field} must be a positive number`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Formats yield value with unit
 * @param {number} value - Yield value in kg/hectare
 * @returns {string} - Formatted string with unit
 */
export const formatYield = (value) => {
  if (value === null || value === undefined) return 'N/A';
  return `${value.toFixed(2)} kg/hectare`;
};

/**
 * Validates weather API response
 * @param {object} data - Weather data from API
 * @returns {boolean} - Whether data is valid
 */
export const isValidWeatherData = (data) => {
  return data && 
         data.main && 
         data.weather && 
         data.weather.length > 0 &&
         data.name;
};

/**
 * Formats temperature from Kelvin to Celsius
 * @param {number} kelvin - Temperature in Kelvin
 * @returns {number} - Temperature in Celsius
 */
export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);
};

/**
 * Formats date for display
 * @param {Date|string} date - Date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Debounce function for search inputs
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Local storage helpers with error handling
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('Error reading from localStorage:', error);
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn('Error writing to localStorage:', error);
      return false;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Error removing from localStorage:', error);
      return false;
    }
  }
};