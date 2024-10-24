import styles from './FormField.module.css'
const FormField = ({ label, type, name, required }) => {
  return (
    <label className={styles.formField}>
      {label}
      {type === 'textarea' ? (
        <textarea name={name} required={required} className={styles.inputField}></textarea>
      ) : (
        <input type={type} name={name} required={required} className={styles.inputField} />
      )}
    </label>
  );
};

export default FormField;