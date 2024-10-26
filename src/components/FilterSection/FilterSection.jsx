import styles from './FilterSection.module.css';
import FilterCategory from '@components/FilterCategory/FilterCategory.jsx';
import LocationFilter from '@components/LocationFilter/LocationFilter.jsx';
import Button from '@components/Button/Button.jsx';
import { clearFilters, setFilters } from '@redux/filtersSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const FilterSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const vehicleEquipment = [
    { label: 'AC', icon: 'wind', value: 'AC' },
    { label: 'Automatic', icon: 'diagram', value: 'automatic' },
    { label: 'Kitchen', icon: 'cup-hot', value: 'kitchen' },
    { label: 'TV', icon: 'tv', value: 'TV' },
    { label: 'Bathroom', icon: 'bathroom', value: 'bathroom' },
  ];

  const vehicleType = [
    { label: 'Van', icon: 'van', value: 'van' },
    { label: 'Fully Integrated', icon: 'fully-integrated', value: 'fully-integrated' },
    { label: 'Alcove', icon: 'alcove', value: 'alcove' },
  ];

  const handleFilterChange = (value) => {
    const updatedAmenities = {
      ...filters.amenities,
      [value]: !filters.amenities[value],
    };
    dispatch(setFilters({ amenities: updatedAmenities }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className={styles.filterSection}>
      <LocationFilter></LocationFilter>
      <div className={styles.filterCategories}>
        <div className={styles.filterTitle}>Filters</div>
        <FilterCategory title={'Vehicle equipment'}
                        list={vehicleEquipment}
                        onFilterChange={handleFilterChange}
                        selectedFilters={filters.amenities}></FilterCategory>
        <FilterCategory title={'Vehicle type'}
                        list={vehicleType}
                        onFilterChange={handleFilterChange}
                        selectedFilters={filters.amenities}></FilterCategory>
      </div>
      <Button label="Search" onClick={() => {
      }} variant="filled" />
    </div>
  );
};

export default FilterSection;