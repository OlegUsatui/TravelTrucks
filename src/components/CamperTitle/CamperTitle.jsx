import styles from './CamperTitle.module.css';


const CamperTitle = ({ name }) => {
  return (
    <h2 className={styles.camperTitle}>{name}</h2>
  );
};

export default CamperTitle;
