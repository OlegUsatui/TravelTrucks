import Navigation from '../Navigation/Navigation.jsx';
import Logo from '../Logo/Logo.jsx';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;

