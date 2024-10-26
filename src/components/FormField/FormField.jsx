import styles from './FormField.module.css';
import clsx from 'clsx';

const FormField = ({ label, type, name, placeholder, value, onChange, required, disabled }) => {
  return (
    <label className={styles.formField}>
      {label}
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={clsx(styles.inputField, styles.textarea)}
          disabled={disabled}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={styles.inputField}
          disabled={disabled}
        />
      )}
    </label>
  );
};

export default FormField;
