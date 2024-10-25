import styles from './CamperReviews.module.css';

import BookingForm from '@components/BookingForm/BookingForm.jsx';
import ReviewCard from '@components/Review/ReviewCard.jsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCamperById } from '@redux/selectors.js';

const CamperReviews = () => {
  const { catalogId } = useParams();
  const camper = useSelector((state) => selectCamperById(state, catalogId));
  return (
    <div className={styles.camperReviews}>
      <ul className={styles.reviewsList}>
        {camper.reviews.map(item => {
          return (<li>
            <ReviewCard avatar={item.reviewer_name} name={item.reviewer_name} rating={item.reviewer_rating} reviewText={item.comment} />
          </li>);
        })}
      </ul>
      <BookingForm />
    </div>
  );
};

export default CamperReviews;