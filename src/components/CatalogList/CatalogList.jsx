import ListingCard from '@components/ListingCard/ListingCard.jsx';
import styles from './CatalogList.module.css';
import { useSelector } from 'react-redux';
import { selectAllCampers } from '@redux/selectors.js';
import { useState } from 'react';
import Button from '@components/Button/Button.jsx';


const CatalogList = () => {
  const filteredCampers = useSelector(selectAllCampers);
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className={styles.catalogContainer}>
      <ul className={styles.catalogList}>
        {filteredCampers.slice(0, visibleCount).map((camper, index) => (
          <ListingCard
            key={index}
            item={camper}
          />
        ))}
      </ul>
      {visibleCount < filteredCampers.length && (
        <Button label={'Load More'} onClick={loadMore} variant={'outlined'} />
      )}
    </div>
  );
};

export default CatalogList;