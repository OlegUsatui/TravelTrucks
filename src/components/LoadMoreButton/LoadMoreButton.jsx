import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick, variant = 'filled' }) => {
  return (
    <button
      className={`${styles.loadMoreButton} ${styles[variant]}`}
      onClick={onClick}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;