import sprite from '@public/sprite.svg';
import styles from './Error404.module.css';


const Error404 = ({ height }) => {
  return (
    <svg className={styles.error} style={{ minHeight: `${height}px` }}>
      <use xlinkHref={`${sprite}#icon-robot-404-error`} />
    </svg>
  );
};

export default Error404;
