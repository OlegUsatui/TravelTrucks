import Navigation from '../Navigation/Navigation.jsx';
import Logo from '../Logo/Logo.jsx';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

