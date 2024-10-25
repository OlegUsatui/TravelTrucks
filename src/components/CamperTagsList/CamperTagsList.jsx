import CategoryTag from '@components/CategoryTag/CategoryTag.jsx';
import styles from './CamperTagsList.module.css';

const CamperTagsList = ({ item }) => {
  return (
    <div className={styles.listingTags}>
      {item.AC && <CategoryTag label={'AC'} icon={'wind'} />}
      {item.bathroom && <CategoryTag label={'Bathroom'} icon={'bathroom'} />}
      {item.kitchen && <CategoryTag label={'Kitchen'} icon={'cup-hot'} />}
      {item.TV && <CategoryTag label={'TV'} icon={'tv'} />}
      {item.radio && <CategoryTag label={'Radio'} icon={'radio'} />}
      {item.refrigerator && <CategoryTag label={'Refrigerator'} icon={'refrigerator'} />}
      {item.microwave && <CategoryTag label={'Microwave'} icon={'microwave'} />}
      {item.gas && <CategoryTag label={'Gas'} icon={'gas'} />}
      {item.water && <CategoryTag label={'Water'} icon={'water'} />}
      {item.transmission === 'automatic' && <CategoryTag label={'Automatic'} icon={'diagram'} />}
    </div>
  );
};
export default CamperTagsList;
