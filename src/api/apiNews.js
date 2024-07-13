import axios from 'axios';

const BASE_URL = '/api';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

console.log('BASE_URL:', BASE_URL); // Должно вывести правильное значение
console.log('API_KEY:', API_KEY); // Должно вывести правильное значение

export const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/latest-news`, {
            params: {
                apiKey: API_KEY
            },
            headers: {
                'Cache-Control': 'no-cache'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        return null; // Return null if there's an error
    }
};