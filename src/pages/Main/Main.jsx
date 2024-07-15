import { useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './Main.module.css';
import { getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../NewsList/NewsList';

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
      const fetchNews = async () => {
          try {
              const response = await getNews();
              if (response && response.news) {
                  setNews(response.news);
              } else {
                  setNews([]); // Ensure news is an empty array if response is invalid
              }
          } catch (error) {
              console.error('Error in fetchNews:', error);
              setNews([]); // Set news to an empty array in case of an error
          }
      };

      fetchNews();
  }, []);

  return (
      <main className={styles.main}>
          {news.length > 0 ? <NewsBanner item={news[0]} /> : <p>No news available.</p>}
          <NewsList news={news}/>
      </main>
  );
};

export default Main;