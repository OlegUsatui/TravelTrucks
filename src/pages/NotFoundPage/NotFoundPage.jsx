import Error404 from '@components/Error404/Error404.jsx';
import styles from './NotFoundPage.module.css';


const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      Not Found Page
      <Error404 height={'445'} />
    </div>
  );
};

export default NotFoundPage;
