// BookingForm.js
import React, { useState } from 'react';
import './BookingForm.scss';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'birthday',
  });

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setFormData((prev) => ({
      ...prev,
      date: newDate,
    }));
    dispatch({ type: 'UPDATE_DATE', payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData); // Appel à la fonction submitForm
  };

  return (
    <>
      <h1>Booking Page</h1>
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="container-date">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div className="container-time">
          <label htmlFor="time">Time :</label>
          <select
            id="time"
            value={formData.time}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, time: e.target.value }))
            }
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="container-guests">
          <label htmlFor="guests">Number of Guests :</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="20"
            value={formData.guests}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                guests: parseInt(e.target.value, 10),
              }))
            }
            required
          />
        </div>

        <div className="container-occasion">
          <label htmlFor="occasion">Occasion :</label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, occasion: e.target.value }))
            }
            required
          >
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <button type="submit">Submit Reservation</button>
      </form>
    </>
  );
}

export default BookingForm;
