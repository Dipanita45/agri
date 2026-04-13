/**
 * Custom hook for weather data fetching
 */
import { useState, useCallback } from 'react';
import { weatherApi } from '../services/api';

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherByCity = useCallback(async (city) => {
    if (!city || !city.trim()) {
      setError('Please enter a city name');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await weatherApi.byCity(city);
      setWeather(data);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to fetch weather');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchWeatherByLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const data = await weatherApi.byLocation(latitude, longitude);
      setWeather(data);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to get location or weather');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearWeather = useCallback(() => {
    setWeather(null);
    setError(null);
  }, []);

  return {
    weather,
    loading,
    error,
    fetchWeatherByCity,
    fetchWeatherByLocation,
    clearWeather,
  };
};

export default useWeather;