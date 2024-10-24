import styles from './InternalNavigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.tabButton, isActive && styles.active);
};


const InternalNavigation = () => {
  return (
    <div className={styles.internalNavigation}>
      <NavLink to="features" className={buildLinkClass}>Features</NavLink>
      <NavLink to="reviews" className={buildLinkClass}>Reviews</NavLink>
    </div>
  );
};

export default InternalNavigation;