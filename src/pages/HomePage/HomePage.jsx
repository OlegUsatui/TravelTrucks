import styles from './HomePage.module.css';
import Button from '@components/Button/Button.jsx';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.heroText}>Campers of your dreams</h1>
      <p className={styles.subText}>You can find everything you want in our catalog</p>
      <Button label="View Now" onClick={() => {}} variant="filled">View Now</Button>
    </div>
  );
};

export default HomePage;