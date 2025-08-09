import axios from 'axios';

export const analyzeNews = async (text) => {
  try {
    const response = await axios.post('http://localhost:5000/analyze', { text });
    return response.data;
  } catch (err) {
    console.error('API Error:', err);
    throw err;
  }
};
