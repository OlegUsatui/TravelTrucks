import sprite from '@public/sprite.svg';
import styles from './Empty.module.css';

const Empty = ({ text, height }) => {
  return (
    <div className={styles.noResults}>
      <span>{text}</span>
      <svg style={{ minHeight: `${height}px` }}>
        <use xlinkHref={`${sprite}#icon-sad-face`} />
      </svg>
    </div>
  )
}

export default Empty;