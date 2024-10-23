import styles from './SearchButton.module.css';

const SearchButton = ({ onClick }) => {
  return (
    <button className={styles.searchButton} onClick={onClick}>
      Search
    </button>
  );
};

export default SearchButton;