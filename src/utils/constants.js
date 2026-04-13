/**
 * Application-wide constants
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  TIMEOUT: 10000, // 10 seconds
};

// Supported Crops
export const CROP_OPTIONS = [
  'Rice', 'Wheat', 'Maize', 'Barley', 'Jowar', 'Bajra', 'Ragi',
  'Small Millets', 'Tur', 'Gram', 'Urad', 'Moong', 'Lentil', 'Other Pulses'
];

// Supported Languages
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🌍' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', flag: '🇮🇳' },
  { code: 'or', name: 'Odia', flag: '🇮🇳' },
];

// Local Storage Keys
export const STORAGE_KEYS = {
  FARMER_NAME: 'farmerName',
  PREFERRED_LANGUAGE: 'preferredLanguage',
};

// UI Messages
export const MESSAGES = {
  LOADING: 'Loading...',
  ERROR: 'An error occurred. Please try again.',
  SERVER_ERROR: 'Server not running. Start with: python3 -m uvicorn app:app --reload --port 8000',
  NO_DATA: 'No data available',
};

// Feature Flags (for future features)
export const FEATURES = {
  WEATHER: true,
  SOIL_CHATBOT: true,
  YIELD_PREDICTION: true,
  MARKET_PRICES: false,
  DISEASE_DETECTION: false,
  OFFLINE_MODE: false,
};