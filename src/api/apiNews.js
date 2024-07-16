import axios from 'axios';

const API_URL = 'https://api.currentsapi.services/v1/';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_URL}/latest-news`, {
      params: {
        apiKey: API_KEY,
      },
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null; // Return null if there's an error
  }
};
