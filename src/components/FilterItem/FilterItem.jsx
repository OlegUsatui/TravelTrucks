import sprite from '@public/sprite.svg';
import styles from './FilterItem.module.css';


const FilterItem = ({ icon, name, selected, onChange }) => {
  return (
    <li className={`${styles.categoryItem} ${selected ? styles.active : ''}`} onClick={onChange}>
      <svg width="32" height="32">
        <use xlinkHref={`${sprite}#icon-${icon}`} />
      </svg>
      <span className={styles.itemName}>{name}</span>
    </li>
  );
};

export default FilterItem;
