import { Outlet, useParams } from 'react-router-dom';
import styles from './CamperDetailsPage.module.css';
import { selectCamperById } from '@redux/selectors.js';
import { useSelector } from 'react-redux';
import Gallery from '@components/Gallery/Gallery.jsx';
import CamperTitle from '@components/CamperTitle/CamperTitle.jsx';
import CamperPrice from '@components/CamperPrice/CamperPrice.jsx';
import CamperRatingAndLocation from '@components/CamperRatingAndLocation/CamperRatingAndLocation.jsx';

const CamperDetailsPage = () => {
  const { catalogId } = useParams();
  const camper = useSelector((state) => selectCamperById(state, catalogId));

  return (
    <div className={styles.detailsPage}>
      <div className={styles.container}>
        <div className={styles.camperDetails}>
          <CamperTitle name={camper.name}/>
          <CamperRatingAndLocation id={camper.id} rating={camper.rating} reviews={camper.reviews} location={camper.location}/>
          <CamperPrice price={camper.price} />
          <Gallery images={camper.gallery}/>
          <p className={styles.camperDescription}>{camper.description}</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CamperDetailsPage;