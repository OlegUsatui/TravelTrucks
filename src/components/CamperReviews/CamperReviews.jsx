import { useSelector } from 'react-redux';
import BookingForm from '@components/BookingForm/BookingForm.jsx';
import ReviewCard from '@components/Review/ReviewCard.jsx';
import styles from './CamperReviews.module.css';


const CamperReviews = () => {
  const camper = useSelector((state) => state.campers.camperDetails);

  return (
    <div className={styles.camperReviews}>
      <ul className={styles.reviewsList}>
        {camper.reviews.map((item, idx) => {
          return (
            <li key={idx}>
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
