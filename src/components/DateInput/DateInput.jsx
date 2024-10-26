import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateInput.module.css';

const DateInput = ({ label, value, onChange, id, required }) => {
  const [startDate, setStartDate] = useState(value);

  useEffect(() => {
    setStartDate(value || null);
  }, [value]);

  const handleDateChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <div className={styles.formField}>
      <DatePicker
        id={id}
        selected={startDate}
        onChange={handleDateChange}
        className={styles.inputField}
        minDate={new Date()}
        placeholderText={label}
        dateFormat="yyyy-MM-dd"
        required={required}
      />
    </div>
  );
};

export default DateInput;

