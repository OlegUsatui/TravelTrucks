import { FallingLines, Grid } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Grid
      visible={true}
      height="80"
      width="80"
      color="#6C7178"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass="grid-wrapper"
    />
  </div>
)

export default Loader;