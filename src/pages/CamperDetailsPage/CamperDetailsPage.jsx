import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '@redux/campersOps.js';
import Gallery from '@components/Gallery/Gallery.jsx';
import CamperTitle from '@components/CamperTitle/CamperTitle.jsx';
import CamperPrice from '@components/CamperPrice/CamperPrice.jsx';
import CamperRatingAndLocation from '@components/CamperRatingAndLocation/CamperRatingAndLocation.jsx';
import InternalNavigation from '@components/InternalNavigation/InternalNavigation.jsx';
import styles from './CamperDetailsPage.module.css';
import Loader from '@components/Loader/Loader.jsx';

const CamperDetailsPage = () => {
  const { catalogId } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => state.campers.camperDetails);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    if (catalogId) {
      dispatch(fetchCamperById(catalogId));
    }
  }, [dispatch, catalogId]);

  if (status === 'loading') {
    return (<Loader />);
  }

  if (status === 'failed') {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (!camper) {
    return <div className={styles.error}>Кемпер не найден</div>;
  }

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