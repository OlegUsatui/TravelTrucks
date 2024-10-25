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
          <div className={styles.rating}>{'\u2605'.repeat(rating)}</div>
        </div>
      </div>
      <div className={styles.reviewText}>{reviewText}</div>
    </div>
  );
};

export default ReviewCard;