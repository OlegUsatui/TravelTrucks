import styles from './HomePage.module.css';
import Button from '@components/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleViewNowClick = () => {
    navigate('/catalog')
  }
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <h1 className={styles.heroText}>Campers of your dreams</h1>
        <p className={styles.subText}>You can find everything you want in our catalog</p>
        <Button label="View Now" onClick={handleViewNowClick} variant="filled">View Now</Button>
      </div>
    </div>
  );
};

export default HomePage;