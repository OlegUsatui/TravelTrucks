import sprite from '@public/sprite.svg';
import styles from './StarRating.module.css';


const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    className={filled ? styles.filledStar : styles.emptyStar}
  >
    <use xlinkHref={`${sprite}#icon-star`} />
  </svg>
);

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className={styles.rating}>
      {Array.from({ length: totalStars }, (_, index) => (
        <StarIcon key={index} filled={index < Math.ceil(rating)} />
      ))}
    </div>
  );
};

export default StarRating;
