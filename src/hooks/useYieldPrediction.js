/**
 * Custom hook for yield prediction
 */
import { useState, useCallback } from 'react';
import { yieldApi } from '../services/api';

export const useYieldPrediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPrediction = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const result = await yieldApi.predict(data);
      setPrediction(result);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to get prediction');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const resetPrediction = useCallback(() => {
    setPrediction(null);
    setError(null);
  }, []);

  return {
    prediction,
    loading,
    error,
    getPrediction,
    resetPrediction,
  };
};

export default useYieldPrediction;