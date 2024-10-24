import styles from './BookingForm.module.css';
import typographyStyles from '@styles/Typography.module.css';
import Button from '@components/Button/Button.jsx';
import FormField from '@components/FormField/FormField.jsx';

const BookingForm = () => {
  return (
    <div className={styles.bookingFormWrapper}>
      <h2 className={typographyStyles.titleH2}>Book your campervan now</h2>
      <p className={typographyStyles.paragraph}>Stay connected! We are always ready to help you.</p>
      <form className={styles.bookingForm}>
        <FormField label="Name*" type="text" name="name" required />
        <FormField label="Email*" type="email" name="email" required />
        <FormField label="Booking date*" type="date" name="bookingDate" required />
        <FormField label="Comment" type="textarea" name="comment" />
        <Button type="submit" label={'Send'}></Button>
      </form>
    </div>
  );
};

export default BookingForm;