import React, { useReducer } from 'react';
import BookingForm from '../../components/bookingForm/BookingForm';
import './Booking.scss';
import { useNavigate } from 'react-router';
import { fetchAPI, submitAPI } from '../../utils/api';

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
  if (action.type !== 'UPDATE_DATE') {
    return state; // Garde l'état inchangé pour les actions non pertinentes
  }

  const dateString = action.payload;
  console.log('Received date string:', dateString);

  // Convertir la chaîne de date en objet Date
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.error('Invalid date format');
    return state; // Retourne l'état actuel si la date est invalide
  }

  // Vérification pour une date spécifique (exemple : Noël)
  if (dateString === '2024-12-25') {
    console.log('Special timings for Christmas');
    return ['10:00 AM', '12:00 PM', '2:00 PM'];
  }

  // Appel de l'API pour obtenir les horaires disponibles
  try {
    const dateFromApi = fetchAPI(date); // Envoie une chaîne formatée
    if (dateFromApi) {
      console.log('Timings fetched from API:', dateFromApi);
      return dateFromApi;
    }
  } catch (error) {
    console.error('Error fetching timings from API:', error);
  }

  console.log('Default timings returned');
  return initializeTimes(); // Retourne les horaires par défaut si aucune condition n'est remplie
};



function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData); // Remplacez par la logique API
    if (success) {
      navigate('/confirmation'); // Redirige vers la page de confirmation
    } else {
      console.error('Error: Form submission failed');
    }
  };

  return (
    <section>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </section>
  );
}

export default Booking;
