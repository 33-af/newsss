import { useEffect } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './Main.module.css';
import { getCategories, getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]); // доступные категории новостей.
  const [selectedCategory, setSelectedCategory] = useState('All'); // выбранная категория новостей.
  const totalPages = 10; // всего страниц
  const pageSize = 10; // количество новостей на странице.



  // fetchNews - функция для получения новостей с заданными параметрами
  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === 'All' ? null : selectedCategory,
      });
      if (response) {
        setNews(response.news);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error in fetchNews:', error);
      setIsLoading(false);
    }
  };
  // функция для получения списка категорий.
  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      if (response) {
        // К первой позиции массива добавляется категория "All" для отображения всех новостей без фильтрации по категориям.
        setCategories(['All', ...response.categories]);
      }
    } catch (error) {
      console.error('Error in fetchCategories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={'item'} count={10} />
      )}
    </main>
  );
};

export default Main;