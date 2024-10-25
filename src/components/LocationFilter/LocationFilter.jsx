import TextInput from '@components/TextInput/TextInput.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '@redux/filtersSlice.js';

const LocationFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(setFilters({ location: value }));
  };

  return (
    <div>
      <TextInput
        label={'Location'}
        value={filters.location}
        onChange={handleFilterChange}
        placeholder={'City'}
        id={'location'} />
    </div>
  );
};


export default LocationFilter;