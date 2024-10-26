import styles from './CamperPrice.module.css';

const CamperPrice = ({ price }) => {
  return (
    <p className={styles.camperPrice}>€{price.toFixed(2)}</p>
  );
};

export default CamperPrice;