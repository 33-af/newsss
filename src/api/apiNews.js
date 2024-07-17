// import axios from 'axios';

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1';

// export const getNews = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/latest-news`, {
//       params: {
//         apiKey: API_KEY,
//       },
//       headers: {
//         'Cache-Control': 'no-cache',
//       },
//     });

//     console.log('API response:', response.data); // Добавлено для отладки
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return null; // Return null if there's an error
//   }
// };

import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.currentsapi.services/v1/';

export const getNews = async (page_number = 1, page_size = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
      },
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json', // Example of a typical header
        'X-Requested-With': 'XMLHttpRequest', // Add this header as requested
      },
    });

    console.log('API response:', response.data); // For debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null; // Return null if there's an error
  }
};

