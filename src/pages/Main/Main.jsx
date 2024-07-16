import { useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './Main.module.css';
import { getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
      const fetchNews = async () => {
          try {
            setIsLoading(true)
              const response = await getNews();
              setNews(response.news)
              setIsLoading(false)
          } catch (error) {
              console.error('Error in fetchNews:', error);
          }
      };

      fetchNews();
  }, []);

  return (
      <main className={styles.main}>
          {news.length > 0 && !isloading ? (
            <NewsBanner item={news[0]} />
            ): ( <Skeleton type={'banner'} count={1} />
            )}
            {!isloading ? (
                <NewsList news={news} />
             ): (
                <Skeleton type={'item'} count={10}/>
             )}
          <NewsList news={news}/>
      </main>
  );
};

export default Main;