import styles from './FormField.module.css'
import clsx from 'clsx';
const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <label className={styles.formField}>
      {label}
      {type === 'textarea' ? (
        <textarea name={name} required={required} placeholder={placeholder} className={clsx(styles.inputField, styles.textarea)} ></textarea>
      ) : (
        <input type={type} name={name} required={required} placeholder={placeholder} className={styles.inputField} />
      )}
    </label>
  );
};

export default FormField;