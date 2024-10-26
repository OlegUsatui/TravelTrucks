import FilterSection from '@components/FilterSection/FilterSection.jsx';
import CatalogList from '@components/CatalogList/CatalogList.jsx';
import styles from './CatalogPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '@redux/campersOps.js';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);


  return (
    <div className={styles.catalogPage}>
      <div className={styles.container}>
        <FilterSection />
        <CatalogList />
      </div>
    </div>
  );
};

export default CatalogPage;