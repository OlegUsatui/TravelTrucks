import sprite from '@assets/sprite.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg width="136" height="16">
        <use xlinkHref={`${sprite}#icon-logo`} />
      </svg>
    </div>
  );
};

export default Logo;