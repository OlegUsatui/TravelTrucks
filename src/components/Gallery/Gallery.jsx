import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styles from './Gallery.module.css';


const Gallery = ({ images }) => {
  return (
    <PhotoProvider>
      <div className={styles.camperGallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.camperGalleryItem}>
            <PhotoView src={image.original}>
              <img
                src={image.thumb}
                alt={`Camper view ${index + 1}`}
                className={styles.camperGalleryImage}
              />
            </PhotoView>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
