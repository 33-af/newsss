

import styles from './Categories.module.css'

// selectedCategory  текущая выбранная категория новостей.
// categories список доступных категорий новостей.
// setSelectedCategory функция для изменения текущей выбранной категории.

const Categories = ({ selectedCategory, categories, setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? styles.active : styles.item}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;