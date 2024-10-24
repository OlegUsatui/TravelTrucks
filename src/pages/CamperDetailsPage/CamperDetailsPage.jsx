import { Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCamperById } from '@redux/selectors.js';
import Gallery from '@components/Gallery/Gallery.jsx';
import CamperTitle from '@components/CamperTitle/CamperTitle.jsx';
import CamperPrice from '@components/CamperPrice/CamperPrice.jsx';
import CamperRatingAndLocation from '@components/CamperRatingAndLocation/CamperRatingAndLocation.jsx';
import InternalNavigation from '@components/InternalNavigation/InternalNavigation.jsx';
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
  const { catalogId } = useParams();
  const camper = useSelector((state) => selectCamperById(state, catalogId));

  return (
    <div className={styles.detailsPage}>
      <div className={styles.container}>
        <div className={styles.camperDetails}>
          <div className={styles.camperNameWrapper}>
            <CamperTitle name={camper.name} />
          </div>
          <div className={styles.camperRatingAndLocationWrapper}>
            <CamperRatingAndLocation
              id={camper.id}
              rating={camper.rating}
              reviews={camper.reviews}
              location={camper.location} />
          </div>
          <div className={styles.camperPriceWrapper}>
            <CamperPrice price={camper.price} />
          </div>
          <div className={styles.camperGalleryWrapper}>
            <Gallery images={camper.gallery} />
          </div>
            <p className={styles.camperDescription}>{camper.description}</p>
          </div>
          <InternalNavigation />
          <Outlet />
        </div>
      </div>
      );
      };

      export default CamperDetailsPage;