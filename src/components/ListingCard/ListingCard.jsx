import Button from '@components/Button/Button.jsx';
import styles from './ListingCard.module.css';
import CategoryTag from '@components/CategoryTag/CategoryTag.jsx';
import sprite from '@assets/sprite.svg';
import { Link, useNavigate } from 'react-router-dom';
import CamperTitle from '@components/CamperTitle/CamperTitle.jsx';
import CamperPrice from '@components/CamperPrice/CamperPrice.jsx';
import CamperRatingAndLocation from '@components/CamperRatingAndLocation/CamperRatingAndLocation.jsx';
import CamperLike from '@components/CamperLike/CamperLike.jsx';

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
          <CamperLike/>
        </div>
        <CamperRatingAndLocation id={item.id} rating={item.rating} reviews={item.reviews} location={item.location}/>

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
          <Button label="Show more" onClick={handleShowMoreClick} variant="filled" />
        </div>
      </div>
    </li>
  );
};

export default ListingCard;