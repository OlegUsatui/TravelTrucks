import styles from './DateInput.module.css';


const DateInput = ({ label, value, onChange, id }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type="date"
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
        min={new Date().toISOString().split('T')[0]}
      />
      <small className={styles.helperText}>Select a date between today</small>
    </div>
  );
};

export default DateInput;