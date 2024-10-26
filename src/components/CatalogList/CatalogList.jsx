import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredCampers } from '@redux/selectors';
import Loader from '@components/Loader/Loader.jsx';
import ListingCard from '@components/ListingCard/ListingCard.jsx';
import Button from '@components/Button/Button.jsx';
import styles from './CatalogList.module.css';

const CatalogList = () => {
  const filteredCampers = useSelector(selectFilteredCampers);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [filteredCampers]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (status === 'loading') return <Loader />;

  if (status === 'failed') return <div className={styles.error}>Error: {error}</div>;

  if (filteredCampers.length === 0) return <div className={styles.noResults}>No campers available</div>;

  const isLoadMoreVisible = visibleCount < filteredCampers.length;

  return (
    <div className={styles.catalogContainer}>
      <ul className={styles.catalogList}>
        {filteredCampers.slice(0, visibleCount).map((camper) => (
          <ListingCard key={camper.id} item={camper} />
        ))}
      </ul>
      {isLoadMoreVisible && (
        <Button label="Load More" onClick={handleLoadMore} variant="outlined" />
      )}
    </div>
  );
};

export default CatalogList;
