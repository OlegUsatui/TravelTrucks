import styles from './CamperFeatures.module.css';
import typographyStyles from '@styles/Typography.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCamperById } from '@redux/selectors.js';
import CamperTagsList from '@components/CamperTagsList/CamperTagsList.jsx';
import BookingForm from '@components/BookingForm/BookingForm.jsx';

const CamperFeatures = () => {
  const { catalogId } = useParams();
  const camper = useSelector((state) => selectCamperById(state, catalogId));

  return (
    <div className={styles.camperFeatures}>
      <div className={styles.camperDetails}>
        <div className={styles.camperAmenities}>
          <CamperTagsList item={camper} />
        </div>
        <div className={styles.camperVehicleDetails}>
          <h3 className={typographyStyles.titleH3}>Vehicle details</h3>
          <ul>
            <li>
              <span className={typographyStyles.text2}>Form:</span>
              <span className={typographyStyles.text2}>{camper.form}</span>
            </li>
            <li>
              <span className={typographyStyles.text2}>Length:</span>
              <span className={typographyStyles.text2}>{camper.length}</span>
            </li>
            <li>
              <span className={typographyStyles.text2}>Width:</span>
              <span className={typographyStyles.text2}>{camper.width}</span>
            </li>
            <li>
              <span className={typographyStyles.text2}>Height:</span>
              <span className={typographyStyles.text2}>{camper.height}</span>
            </li>
            <li>
              <span className={typographyStyles.text2}>Tank:</span>
              <span className={typographyStyles.text2}>{camper.tank}</span>
            </li>
            <li>
              <span className={typographyStyles.text2}>Consumption:</span>
              <span className={typographyStyles.text2}>{camper.consumption}</span>
            </li>
          </ul>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default CamperFeatures;