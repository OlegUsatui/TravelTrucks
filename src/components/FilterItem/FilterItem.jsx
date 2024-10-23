import styles from './FilterItem.module.css';

const FilterItem = ({icon, name}) => {
  return (
    <>
      <div>{name}</div>
      <div>{icon}</div>
    </>

  );
};

export default FilterItem;