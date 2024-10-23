import styles from './CategoryTag.module.css';
import sprite from '@assets/sprite.svg';

const CategoryTag = ({ label, icon }) => {
  return (
    <div className={styles.tag}>
      <svg width="20" height="20" className={styles.icon}>
        <use xlinkHref={`${sprite}#${icon}`} />
      </svg>
      <span>{label}</span>
    </div>
  );
};

export default CategoryTag;