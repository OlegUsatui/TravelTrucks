import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import styles from './Gallery.module.css';


const Gallery = ({ images }) => {
  const [lightboxController, setLightboxController] = useState({ toggler: false, slide: 1 });

  const openLightboxOnSlide = (slideIndex) => {
    setLightboxController({ toggler: !lightboxController.toggler, slide: slideIndex });
  };

  return (
    <div className={styles.camperGallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.camperGalleryItem}>
          <img
            key={index}
            src={image.thumb}
            alt={`Camper view ${index + 1}`}
            onClick={() => openLightboxOnSlide(index + 1)}
            className={styles.camperGalleryImage}
          />
        </div>
      ))}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images.map(image => image.original)}
        slide={lightboxController.slide}
      />
    </div>
  );
};

export default Gallery;