/**
 * Centralized API Service for communicating with backend
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const checkHealth = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }
    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
