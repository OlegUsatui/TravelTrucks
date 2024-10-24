import styles from './Button.module.css';

const Button = ({ label, onClick, variant = 'filled', type = 'text' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
