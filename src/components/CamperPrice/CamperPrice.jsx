import styles from './CamperPrice.module.css';


const CamperPrice = ({ price }) => {
  return (
    <p className={styles.camperPrice}>${ price }</p>
  );
};

export default CamperPrice;