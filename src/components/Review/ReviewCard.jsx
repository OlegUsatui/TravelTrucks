import StarRating from '@components/StarRating/StarRating.jsx';
import typographyStyles from '@styles/Typography.module.css';
import styles from './ReviewCard.module.css';


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
      <p className={typographyStyles.paragraph}>{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
