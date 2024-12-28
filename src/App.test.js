import { render, screen } from '@testing-library/react';
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

