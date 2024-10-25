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
        <FormField type="text" name="name" placeholder={"Name*"} required />
        <FormField type="email" name="email" placeholder={"Email*"} required />
        <FormField type="date" name="bookingDate" placeholder={"Booking date*"} required />
        <FormField type="textarea" name="comment" placeholder={"Comment"} />
        <div className={styles.buttonWrapper}>
          <Button type="submit" label={'Send'}></Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;