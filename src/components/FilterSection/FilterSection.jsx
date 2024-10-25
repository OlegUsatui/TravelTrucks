import styles from './FilterSection.module.css';
import FilterCategory from '@components/FilterCategory/FilterCategory.jsx';
import LocationFilter from '@components/LocationFilter/LocationFilter.jsx';
import Button from '@components/Button/Button.jsx';

const FilterSection = () => {
  const vehicleEquipment = [
    { label: 'AC', icon: 'wind' },
    { label: 'Automatic', icon: 'diagram' },
    { label: 'Kitchen', icon: 'cup-hot' },
    { label: 'TV', icon: 'tv' },
    { label: 'Bathroom', icon: 'bathroom' },
  ];

  const vehicleType = [
    { label: 'Van', icon: 'van' },
    { label: 'Fully Integrated', icon: 'fully-integrated' },
    { label: 'Alcove', icon: 'alcove' },
  ];
  return (
    <div className={styles.filterSection}>
      <LocationFilter></LocationFilter>
      <div className={styles.filterCategories}>
        <div className={styles.filterTitle}>Filters</div>
        <FilterCategory title={'Vehicle equipment'} list={vehicleEquipment}></FilterCategory>
        <FilterCategory title={'Vehicle type'} list={vehicleType}></FilterCategory>
      </div>
      <Button label="Search" onClick={() => {
      }} variant="filled" />
    </div>
  );
};

export default FilterSection;