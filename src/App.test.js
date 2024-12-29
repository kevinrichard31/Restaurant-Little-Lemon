import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './components/bookingForm/BookingForm';
import { initializeTimes, updateTimes } from './pages/booking/Booking';

// Mock data for availableTimes prop
test('renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={initializeTimes()} />);
  const heading = screen.getByText(/Booking Page/i);
  expect(heading).toBeInTheDocument();
});

// Test for initializeTimes function
test('renders the select options and collects their values into an array', () => {

  const dispatch = jest.fn();

  render(<BookingForm availableTimes={initializeTimes()} dispatch={dispatch} />);

  const selectElement = screen.getByLabelText(/Time/i);
  const options = Array.from(selectElement.options).map(option => option.value);

  expect(options).toEqual(['', ...initializeTimes()]);
});

// Test UpdateTimes
test('updateTimes returns a non-empty array for UPDATE_DATE action', () => {
  const initialState = initializeTimes();
  const action = { type: 'UPDATE_DATE', payload: '2023-12-25' };

  const newState = updateTimes(initialState, action);

  // Vérifier que le tableau renvoyé n'est pas vide
  expect(newState).not.toHaveLength(0); // Le tableau ne doit pas être vide
});

test('verify attribute of form', () => {
  const result = render(<BookingForm availableTimes={initializeTimes()} />);
  const inputDate = result.container.querySelector('#date')
  expect(inputDate).toHaveAttribute('id', 'date');
})

test('should validate the form and handle submission with valid and invalid inputs', async () => {
  // Mock de la fonction submitForm
  const submitFormMock = jest.fn();

  // Rendu du formulaire
  render(<BookingForm availableTimes={initializeTimes()} dispatch={submitFormMock} submitForm={submitFormMock} />);

  // Récupérer les éléments du formulaire
  const dateInput = screen.getByLabelText(/Date/i);
  const timeSelect = screen.getByLabelText(/Time/i);
  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  const submitButton = screen.getByText(/Submit Reservation/i);

  // Cas de soumission avec des valeurs invalides
  fireEvent.change(dateInput, { target: { value: '' } }); // Date vide
  fireEvent.change(timeSelect, { target: { value: '' } }); // Heure vide
  fireEvent.change(guestsInput, { target: { value: '' } }); // Nombre d'invités vide
  fireEvent.change(occasionSelect, { target: { value: '' } }); // Occasion vide

  fireEvent.click(submitButton);

  // Attendre que les erreurs apparaissent
  await waitFor(() => {
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    expect(screen.getByText('Number of guests is required')).toBeInTheDocument();
    expect(screen.getByText('Occasion is required')).toBeInTheDocument();
  });

  // Vérifier que la fonction de soumission n'a pas été appelée avec des données invalides
  expect(submitFormMock).not.toHaveBeenCalled();


});
