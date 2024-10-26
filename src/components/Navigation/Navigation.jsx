import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navigation.module.css';


const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={buildLinkClass}>Home</NavLink>
      <NavLink to="/catalog" className={buildLinkClass} end>Catalog</NavLink>
    </nav>
  );
};

export default Navigation;
