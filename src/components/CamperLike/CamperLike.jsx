import styles from './CamperLike.module.css';
import sprite from '@assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '@redux/favoritesSlice';
import { useEffect } from 'react';

const CamperLike = ({ camperId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camperId);

  const handleLikeClick = () => {
    dispatch(toggleFavorite(camperId));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <svg
      width="26"
      height="24"
      className={`${styles.listingLike} ${isFavorite ? styles.active : ''}`}
      onClick={handleLikeClick}
    >
      <use xlinkHref={`${sprite}#icon-like`} />
    </svg>
  );
};

export default CamperLike;
