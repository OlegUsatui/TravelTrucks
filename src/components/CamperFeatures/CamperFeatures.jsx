import styles from './CamperFeatures.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCamperById } from '@redux/selectors.js';
import CamperTagsList from '@components/CamperTagsList/CamperTagsList.jsx';

const CamperFeatures = () => {
  const { catalogId } = useParams();
  const camper = useSelector((state) => selectCamperById(state, catalogId));

  return (
    <div className={styles.camperDetails}>
      <div className={styles.camperAmenities}>
        <CamperTagsList item={camper}/>
      </div>
      <div className={styles.camperVehicleDetails}>
        <h3>Vehicle details</h3>
        <hr />
        <ul>
          <li><strong>Form:</strong> {camper.form}</li>
          <li><strong>Length:</strong> {camper.length} m</li>
          <li><strong>Width:</strong> {camper.width} m</li>
          <li><strong>Height:</strong> {camper.height} m</li>
          <li><strong>Tank:</strong> {camper.tank} l</li>
          <li><strong>Consumption:</strong> {camper.consumption} l/100km</li>
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;