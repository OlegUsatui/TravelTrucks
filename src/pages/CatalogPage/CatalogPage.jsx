import FilterSection from '@components/FilterSection/FilterSection.jsx';
import CatalogList from '@components/CatalogList/CatalogList.jsx';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
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