import styles from './CamperReviews.module.css';
import BookingForm from '@components/BookingForm/BookingForm.jsx';
import ReviewCard from '@components/Review/ReviewCard.jsx';
import { useSelector } from 'react-redux';

const CamperReviews = () => {
  const camper = useSelector((state) => state.campers.camperDetails);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  return (
    <div className={styles.camperReviews}>
      <ul className={styles.reviewsList}>
        {camper.reviews.map(item => {
          return (
            <li>
              <ReviewCard
                avatar={item.reviewer_name}
                name={item.reviewer_name}
                rating={item.reviewer_rating}
                reviewText={item.comment} />
            </li>
          );
        })}
      </ul>
      <BookingForm />
    </div>
  );
};

export default CamperReviews;