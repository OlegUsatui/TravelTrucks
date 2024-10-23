import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';
import Navigation from '../Navigation/Navigation.jsx';
import Logo from '../Logo/Logo.jsx';

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;

