import sprite from '../../public/sprite.svg';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={'/'} className={styles.link}>
        <svg width="136" height="16">
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
      </Link>
    </div>
  );
};

export default Logo;