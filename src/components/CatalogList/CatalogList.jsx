import ListingCard from '@components/ListingCard/ListingCard.jsx';
import styles from './CatalogList.module.css';
import { useSelector } from 'react-redux';
import { selectAllCampers, selectFilteredCampers } from '@redux/selectors.js';

const CatalogList = () => {
  const filteredCampers = useSelector(selectAllCampers);

  return (
    <ul className={styles.catalogList}>
      {filteredCampers.map((camper, index) => (
        <ListingCard
          key={index}
          item={camper}
        />
      ))}
    </ul>
  );
};

export default CatalogList;