import styles from './CamperRatingAndLocation.module.css';
import { Link } from 'react-router-dom';
import sprite from '@assets/sprite.svg';


const CamperRatingAndLocation = ({ id, rating, reviews, location }) => {
  return (
    <div className={styles.listingDetails}>
      <Link className={styles.listingReviews} to={`/catalog/${id}/reviews`}>
        <svg width="16" height="16" className={styles.listingReviewsIcon}>
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
        {rating}
        ({reviews.length} Reviews)
      </Link>
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