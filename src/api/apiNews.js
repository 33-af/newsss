import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest-news`, {
      params: {
        apiKey: API_KEY,
      },
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    console.log('API response:', response.data); // Добавлено для отладки
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null; // Return null if there's an error
  }
};
