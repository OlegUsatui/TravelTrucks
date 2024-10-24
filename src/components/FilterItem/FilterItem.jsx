import styles from './FilterItem.module.css';
import sprite from '@assets/sprite.svg';

const FilterItem = ({ icon, name }) => {
  return (
    <li className={styles.categoryItem}>
      <svg width="32" height="32" className={styles.itemIcon}>
        <use xlinkHref={`${sprite}#icon-${icon}`} />
      </svg>
      <span className={styles.itemName}>{name}</span>
    </li>

  );
};

export default FilterItem;