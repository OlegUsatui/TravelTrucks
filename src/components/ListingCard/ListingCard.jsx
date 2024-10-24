import Button from '@components/Button/Button.jsx';
import styles from './ListingCard.module.css';
import CategoryTag from '@components/CategoryTag/CategoryTag.jsx';

const ListingCard = ({ listing }) => {
  return (
    <div className={styles.listingCard}>
      <img src={listing.gallery[0].thumb} alt={listing.name} className={styles.listingImage} />
      <div className={styles.listingContent}>
        <div className={styles.listingTitle}>
          <h3 className={styles.listingText}>{listing.name}</h3>
          <p className={styles.listingPrice}>{listing.price}</p>
        </div>
        <div className={styles.listingDetails}>
          <span className={styles.listingReviews}>({listing.reviews.length} Reviews)</span>
          <span className={styles.listingLocation}>{listing.location}</span>
        </div>
        <div className={styles.listingSubtitle}>
          {listing.description}
        </div>
        {/*<div className={styles.listingTags}>*/}
        {/*  {listing.tags.map((tag, index) => (*/}
        {/*    <CategoryTag label={tag.label} icon={tag.icon} key={index} />*/}
        {/*  ))}*/}
        {/*</div>*/}
        <Button label="Show more" onClick={() => {
        }} variant="filled" className={styles.showMoreButton} />
      </div>
    </div>
  );
};

export default ListingCard;