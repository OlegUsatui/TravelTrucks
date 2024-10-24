import Button from '@components/Button/Button.jsx';
import styles from './ListingCard.module.css';
import CategoryTag from '@components/CategoryTag/CategoryTag.jsx';
import sprite from '@assets/sprite.svg';

const ListingCard = ({ item }) => {
  return (
    <li className={styles.listingCard}>
      <img src={item.gallery[0].thumb} alt={item.name} className={styles.listingImage} />
      <div className={styles.listingContent}>
        <div className={styles.listingTitle}>
          <h2 className={styles.listingText}>{item.name}</h2>
          <p className={styles.listingPrice}>
            {item.price}
          </p>
          <svg width="26" height="24">
            <use xlinkHref={`${sprite}#icon-like`} />
          </svg>
        </div>
        <div className={styles.listingDetails}>
          <span className={styles.listingReviews}>
            <svg width="16" height="16" className={styles.listingReviewsIcon}>
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            {item.rating}
            ({item.reviews.length} Reviews)
          </span>
          <span className={styles.listingLocation}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#icon-map`} />
            </svg>
            {item.location}
          </span>
        </div>
        <div className={styles.listingSubtitle} title={item.description}>
          {item.description}
        </div>
        <div className={styles.listingTags}>
          { item.AC &&  <CategoryTag label={'AC'} icon={'wind'} /> }
          { item.bathroom &&  <CategoryTag label={'Bathroom'} icon={'bathroom'} /> }
          { item.kitchen &&  <CategoryTag label={'Kitchen'} icon={'cup-hot'} /> }
          { item.TV &&  <CategoryTag label={'TV'} icon={'tv'} /> }
          { item.radio &&  <CategoryTag label={'Radio'} icon={'radio'} /> }
          { item.refrigerator &&  <CategoryTag label={'Refrigerator'} icon={'refrigerator'} /> }
          { item.microwave &&  <CategoryTag label={'Microwave'} icon={'microwave'} /> }
          { item.gas &&  <CategoryTag label={'Gas'} icon={'gas'} /> }
          { item.water &&  <CategoryTag label={'Water'} icon={'water'} /> }
          { item.transmission === "automatic" &&  <CategoryTag label={'Automatic'} icon={'diagram'} /> }
        </div>
        <div className={styles.showMoreButton}>
          <Button label="Show more" onClick={() => {
          }} variant="filled" />
        </div>
      </div>
    </li>
  );
};

export default ListingCard;