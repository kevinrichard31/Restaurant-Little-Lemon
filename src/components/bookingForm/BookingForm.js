import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './BookingForm.scss';

// Définir le schéma de validation Yup
const bookingSchema = yup.object().shape({
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  guests: yup
    .number()
    .required('Number of guests is required')
    .min(1, 'At least 1 guest is required')
    .max(20, 'Maximum 20 guests allowed'),
  occasion: yup.string().required('Occasion is required'),
});

function BookingForm({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <h1>Booking Page</h1>
      <Formik
        initialValues={{
          date: '',
          time: '',
          guests: 1,
          occasion: 'birthday',
        }}
        validationSchema={bookingSchema}
        onSubmit={(values) => {
          submitForm(values); // Appel à la fonction submitForm avec les données
        }}
      >
        {({ setFieldValue, isValid, dirty }) => (
          <Form className="container-form">
            <div className="container-date">
              <label htmlFor="date">Date :</label>
              <Field
                type="date"
                id="date"
                name="date"
                aria-describedby="date-error"
                onChange={(e) => {
                  setFieldValue('date', e.target.value);
                  dispatch({ type: 'UPDATE_DATE', payload: e.target.value });
                }}
              />
              <ErrorMessage name="date" component="p" className="error" id="date-error" />
            </div>

            <div className="container-time">
              <label htmlFor="time">Time :</label>
              <Field as="select" id="time" name="time" aria-describedby="time-error">
                <option value="">Select a time</option>
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="time" component="p" className="error" id="time-error" />
            </div>

            <div className="container-guests">
              <label htmlFor="guests">Number of Guests :</label>
              <Field
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="20"
                aria-describedby="guests-error"
              />
              <ErrorMessage name="guests" component="p" className="error" id="guests-error" />
            </div>

            <div className="container-occasion">
              <label htmlFor="occasion">Occasion :</label>
              <Field as="select" id="occasion" name="occasion" aria-describedby="occasion-error">
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </Field>
              <ErrorMessage name="occasion" component="p" className="error" id="occasion-error" />
            </div>

            <button 
              type="submit"
              id="btnsubmit" 
              aria-disabled={!isValid || !dirty}
            >
              Submit Reservation
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default BookingForm;
