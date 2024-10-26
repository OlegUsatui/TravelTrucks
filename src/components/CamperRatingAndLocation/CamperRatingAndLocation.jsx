import styles from './CamperRatingAndLocation.module.css';
import { Link } from 'react-router-dom';
import sprite from '../../public/sprite.svg';


const CamperRatingAndLocation = ({ rating, reviews, location }) => {
  return (
    <div className={styles.listingDetails}>
      <div className={styles.listingReviews}>
        <svg width="16" height="16" className={styles.listingReviewsIcon}>
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
        {rating}
        ({reviews.length} Reviews)
      </div>
      <span className={styles.listingLocation}>
        <svg width="16" height="16">
          <use xlinkHref={`${sprite}#icon-map`} />
        </svg>
        {location}
      </span>
    </div>
  );
};

export default CamperRatingAndLocation;