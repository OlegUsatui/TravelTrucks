import Logo from '@components/Logo/Logo.jsx';
import Navigation from '@components/Navigation/Navigation.jsx';
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
