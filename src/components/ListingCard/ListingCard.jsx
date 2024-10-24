import Button from '@components/Button/Button.jsx';
import styles from './ListingCard.module.css';
import CategoryTag from '@components/CategoryTag/CategoryTag.jsx';

const ListingCard = ({ item }) => {
  return (
    <div className={styles.listingCard}>
      <img src={item.gallery[0].thumb} alt={item.name} className={styles.listingImage} />
      <div className={styles.listingContent}>
        <div className={styles.listingTitle}>
          <h3 className={styles.listingText}>{item.name}</h3>
          <p className={styles.listingPrice}>{item.price}</p>
        </div>
        <div className={styles.listingDetails}>
          <span className={styles.listingReviews}>({item.reviews.length} Reviews)</span>
          <span className={styles.listingLocation}>{item.location}</span>
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
        <Button label="Show more" onClick={() => {
        }} variant="filled" className={styles.showMoreButton} />
      </div>
    </div>
  );
};

export default ListingCard;