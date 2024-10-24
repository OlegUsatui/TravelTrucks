import styles from './FilterSection.module.css';
import FilterCategory from '@components/FilterCategory/FilterCategory.jsx';
import LocationFilter from '@components/LocationFilter/LocationFilter.jsx';
import Button from '@components/Button/Button.jsx';

const FilterSection = () => {
  return (
    <div className={styles.filterSection}>
      <LocationFilter></LocationFilter>
      <div className={styles.filterCategories}>
        <div className={styles.filterTitle}>Filters</div>
        <FilterCategory title={'Vehicle equipment'}></FilterCategory>
        <FilterCategory title={'Vehicle type'}></FilterCategory>
      </div>

      <Button label="Search" onClick={() => {}} variant="filled" />
    </div>

  );
};

export default FilterSection;