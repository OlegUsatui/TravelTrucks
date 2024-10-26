import styles from './Button.module.css';

const Button = ({ label, onClick, variant = 'filled', type = 'text', disabled = false }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} disabled={disabled} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
