import Button from '@components/Button/Button.jsx';
import styles from './ListingCard.module.css';
import { useNavigate } from 'react-router-dom';
import CamperTitle from '@components/CamperTitle/CamperTitle.jsx';
import CamperPrice from '@components/CamperPrice/CamperPrice.jsx';
import CamperRatingAndLocation from '@components/CamperRatingAndLocation/CamperRatingAndLocation.jsx';
import CamperLike from '@components/CamperLike/CamperLike.jsx';
import CamperTagsList from '@components/CamperTagsList/CamperTagsList.jsx';

const ListingCard = ({ item }) => {
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    navigate(`/catalog/${item.id}`);
  };

  return (
    <li className={styles.listingCard}>
      <img src={item.gallery[0].thumb} alt={item.name} className={styles.listingImage} />
      <div className={styles.listingContent}>
        <div className={styles.listingTitle}>
          <CamperTitle name={item.name} />
          <CamperPrice price={item.price} />
          <CamperLike />
        </div>
        <CamperRatingAndLocation id={item.id} rating={item.rating} reviews={item.reviews} location={item.location} />

        <div className={styles.listingSubtitle} title={item.description}>
          {item.description}
        </div>

        <CamperTagsList item={item} />

        <div className={styles.showMoreButton}>
          <Button label="Show more" onClick={handleShowMoreClick} variant="filled" />
        </div>
      </div>
    </li>
  );
};

export default ListingCard;