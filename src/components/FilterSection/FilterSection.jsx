import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, setFilters } from '@redux/filtersSlice.js';
import FilterCategory from '@components/FilterCategory/FilterCategory.jsx';
import LocationFilter from '@components/LocationFilter/LocationFilter.jsx';
import Button from '@components/Button/Button.jsx';
import styles from './FilterSection.module.css';
import { VEHICLE_EQUIPMENT, TRANSMISSION_TYPES, VEHICLE_TYPES } from '@constants/filterEnums.js';

const FilterSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [localFilters, setLocalFilters] = useState(filters);

  const vehicleEquipment = [
    { label: 'AC', icon: 'wind', value: VEHICLE_EQUIPMENT.AC },
    { label: 'Kitchen', icon: 'cup-hot', value: VEHICLE_EQUIPMENT.KITCHEN },
    { label: 'Bathroom', icon: 'bathroom', value: VEHICLE_EQUIPMENT.BATHROOM },
    { label: 'TV', icon: 'tv', value: VEHICLE_EQUIPMENT.TV },
    { label: 'Refrigerator', icon: 'refrigerator', value: VEHICLE_EQUIPMENT.REFRIGERATOR },
    { label: 'Microwave', icon: 'microwave', value: VEHICLE_EQUIPMENT.MICROWAVE },
    { label: 'Radio', icon: 'radio', value: VEHICLE_EQUIPMENT.RADIO },
    { label: 'Gas', icon: 'gas', value: VEHICLE_EQUIPMENT.GAS },
    { label: 'Water', icon: 'water', value: VEHICLE_EQUIPMENT.WATER },
  ];

  const transmissionTypes = [
    { label: 'Automatic', icon: 'diagram', value: TRANSMISSION_TYPES.AUTOMATIC },
    { label: 'Manual', icon: 'manual', value: TRANSMISSION_TYPES.MANUAL },
  ];

  const vehicleTypes = [
    { label: 'Van', icon: 'van', value: VEHICLE_TYPES.VAN },
    { label: 'Fully Integrated', icon: 'fully-integrated', value: VEHICLE_TYPES.FULLY_INTEGRATED },
    { label: 'Alcove', icon: 'alcove', value: VEHICLE_TYPES.ALCOVE },
  ];

  const handleFilterChange = (key, value) => {
    if (key === 'amenities') {
      const updatedAmenities = {
        ...localFilters.amenities,
        [value]: !localFilters.amenities[value],
      };
      setLocalFilters({ ...localFilters, amenities: updatedAmenities });
    } else {
      setLocalFilters({ ...localFilters, [key]: value });
    }
  };

  const handleLocationChange = (value) => {
    setLocalFilters({ ...localFilters, location: value });
  };

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
  };

  const handleClearFilters = () => {
    setLocalFilters(initialFiltersState);
    dispatch(clearFilters());
  };

  return (
    <div className={styles.filterSection}>
      <LocationFilter value={localFilters.location} onChange={handleLocationChange} />
      <div className={styles.filterCategories}>
        <div className={styles.filterTitle}>Filters</div>
        <FilterCategory
          title={'Vehicle Equipment'}
          list={vehicleEquipment}
          onFilterChange={(value) => handleFilterChange('amenities', value)}
          selectedFilters={localFilters.amenities}
        ></FilterCategory>
        <FilterCategory
          title={'Transmission Type'}
          list={transmissionTypes}
          onFilterChange={(value) => handleFilterChange('transmission', value)}
          selectedFilters={{ [localFilters.transmission]: true }}
        ></FilterCategory>
        <FilterCategory
          title={'Vehicle Type'}
          list={vehicleTypes}
          onFilterChange={(value) => handleFilterChange('vehicleType', value)}
          selectedFilters={{ [localFilters.vehicleType]: true }}
        ></FilterCategory>
      </div>
      <Button label="Search" onClick={handleSearch} variant="filled" />
    </div>
  );
};

export default FilterSection;
