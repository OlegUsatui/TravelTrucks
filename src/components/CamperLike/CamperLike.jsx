import styles from './CamperLike.module.css';
import sprite from '@assets/sprite.svg';

const CamperLike = ({  }) => {

  return (
    <svg width="26" height="24" className={styles.listingLike}>
      <use xlinkHref={`${sprite}#icon-like`} />
    </svg>
  );
};

export default CamperLike;