import styles from './TextInput.module.css';
import sprite from '@assets/sprite.svg';

const TextInput = ({ label, value, onChange, placeholder, id }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>

        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
        />
        <svg width="20" height="20" className={styles.inputIcon}>
          <use xlinkHref={`${sprite}#icon-map`} />
        </svg>
      </div>
    </div>
  );
};

export default TextInput;