import styles from './FilterCategory.module.css';
import FilterItem from '@components/FilterItem/FilterItem.jsx';

const FilterCategory = ({ title, list }) => {
  return (
    <div className={styles.filterCategory}>
      <div className={styles.categoryTitle}>{title}</div>
      <div className={styles.categoryList}>
        {list.map((item, index) => (

          <FilterItem key={index} icon={item.icon} name={item.name}></FilterItem>
        ))}
      </div>

    </div>

  );
};

export default FilterCategory;