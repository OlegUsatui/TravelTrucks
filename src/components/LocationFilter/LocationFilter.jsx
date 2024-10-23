import styles from './LocationFilter.module.css';
import TextInput from '@components/TextInput/TextInput.jsx';

const LocationFilter = () => {

  const handleChange = (e) => {}
  return (
    <div>
      <TextInput label={'Location'} onChange={handleChange} placeholder={'City'} id={'location'}/>
    </div>
  );
};

export default LocationFilter;