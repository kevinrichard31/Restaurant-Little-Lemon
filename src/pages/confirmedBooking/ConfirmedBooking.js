import React from 'react';
import { useLocation } from 'react-router';
import './ConfirmedBooking.scss';

function ConfirmedBooking() {
  // Utiliser useLocation pour accéder aux données passées via state
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};

  return (
    <section className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been successfully made. We look forward to seeing you!</p>
      <div className="container-details">
        <h2>Reservation Details</h2>
        <ul className="details">
          <li><strong>Date:</strong> {date}</li>
          <li><strong>Time:</strong> {time}</li>
          <li><strong>Guests:</strong> {guests}</li>
          <li><strong>Occasion:</strong> {occasion}</li>
        </ul>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
