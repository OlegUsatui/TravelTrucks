import TextInput from '@components/TextInput/TextInput.jsx';


const LocationFilter = ({ value, onChange }) => {
  const handleLocationChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextInput
        label={'Location'}
        value={value}
        onChange={handleLocationChange}
        placeholder={'City'}
        id={'location'}
      />
    </div>
  );
};

export default LocationFilter;
