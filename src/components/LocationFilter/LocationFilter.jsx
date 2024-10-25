import TextInput from '@components/TextInput/TextInput.jsx';

const LocationFilter = () => {
  const handleChange = () => {
  };

  return (
    <div>
      <TextInput label={'Location'} onChange={handleChange} placeholder={'City'} id={'location'} />
    </div>
  );
};

export default LocationFilter;