import styles from './FilterCategory.module.css';
import FilterItem from '@components/FilterItem/FilterItem.jsx';


const FilterCategory = ({ title, list }) => {
  return (
    <div>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <ul className={styles.categoryList}>
        {list.map((item, index) => (
          <FilterItem key={index} icon={item.icon} name={item.label}></FilterItem>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;