import React, { useReducer } from 'react';
import BookingForm from '../../components/bookingForm/BookingForm';
import './Booking.scss';

// Fonction pour initialiser les heures disponibles
export const initializeTimes = () => {
  return [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];
};

// Fonction pour mettre à jour les heures disponibles en fonction des actions
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      if (action.payload === '2024-12-25') {
        return ['10:00 AM', '12:00 PM', '2:00 PM']; // Horaires spécifiques pour Noël
      }
      return initializeTimes(); 
    default:
      return state;
  }
};

function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <section>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default Booking;
