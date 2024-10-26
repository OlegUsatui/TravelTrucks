import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import typographyStyles from '@styles/Typography.module.css';
import Button from '@components/Button/Button.jsx';
import FormField from '@components/FormField/FormField.jsx';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Моковая отправка данных
    setTimeout(() => {
      toast.success('Booking request sent successfully!');
      setFormData({
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className={styles.bookingFormWrapper}>
      <Toaster />
      <h2 className={typographyStyles.titleH2}>Book your campervan now</h2>
      <p className={typographyStyles.paragraph}>Stay connected! We are always ready to help you.</p>
      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <FormField type="text" name="name" placeholder={'Name*'} value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
        <FormField type="email" name="email" placeholder={'Email*'} value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
        <FormField type="date" name="bookingDate" placeholder={'Booking date*'} value={formData.bookingDate} onChange={handleChange} required disabled={isSubmitting} />
        <FormField type="textarea" name="comment" placeholder={'Comment'} value={formData.comment} onChange={handleChange} disabled={isSubmitting} />
        <div className={styles.buttonWrapper}>
          <Button type="submit" label={'Send'} disabled={isSubmitting}></Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;