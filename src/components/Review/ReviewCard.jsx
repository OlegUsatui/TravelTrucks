import styles from './ReviewCard.module.css';
import typographyStyles from '@styles/Typography.module.css';
import StarRating from '@components/StarRating/StarRating.jsx';

const ReviewCard = ({ name, rating, reviewText }) => {
  const renderAvatar = () => {
    return (
      <div className={styles.avatarPlaceholder}>
        {name.charAt(0).toUpperCase()}
      </div>
    );
  };
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        {renderAvatar()}
        <div>
          <div className={styles.name}>{name}</div>
          <StarRating rating={rating} />
        </div>
      </div>
      <div className={typographyStyles.paragraph}>{reviewText}</div>
    </div>
  );
};

export default ReviewCard;