import ListingCard from '@components/ListingCard/ListingCard.jsx';
import styles from './CatalogList.module.css';
import { useSelector } from 'react-redux';
import { selectAllCampers, selectFilteredCampers } from '@redux/selectors.js';

const CatalogList = () => {
  const filteredCampers = useSelector(selectAllCampers);

  return (
    <div className={styles.catalogList}>
      {filteredCampers.map((listing, index) => (
        <ListingCard
          key={index}
          listing={listing}
        />
      ))}
    </div>
  );
};

export default CatalogList;