import ListingCard from '@components/ListingCard/ListingCard.jsx';
import styles from './CatalogList.module.css';

const CatalogList = () => {
  const listings = [
    {
      title: 'Mavericks',
      price: '€8000.00',
      reviews: 1,
      subtitle: 'The pictures shown here are example vehicles of the respective...',
      location: 'Kyiv, Ukraine',
      tags: [{ label: 'Automatic', icon: 'diagram' }, { label: 'Petrol', icon: 'diagram' }, {
        label: 'Kitchen',
        icon: 'diagram',
      }],
      imageSrc: './assets/camper.png',
    },
    {
      title: 'Mavericks',
      price: '€8000.00',
      reviews: 1,
      subtitle: 'The pictures shown here are example vehicles of the respective pictures shown here are example vehicles of the respective',
      location: 'Kyiv, Ukraine',
      tags: [{ label: 'Automatic', icon: 'diagram' }, { label: 'Petrol', icon: 'diagram' }, {
        label: 'Kitchen',
        icon: 'diagram',
      }],
      imageSrc: './assets/camper.png',
    },
  ];

  return (
    <div className={styles.catalogList}>
      {listings.map((listing, index) => (
        <ListingCard
          key={index}
          listing={listing}
        />
      ))}
    </div>
  );
};

export default CatalogList;