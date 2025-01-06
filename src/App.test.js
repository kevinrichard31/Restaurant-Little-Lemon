import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './components/bookingForm/BookingForm';
import { initializeTimes, updateTimes } from './pages/booking/Booking';

// Mock data for availableTimes prop
test('renders the BookingForm heading and form fields', () => {
  render(<BookingForm availableTimes={initializeTimes()} />);

  // Vérifie que le titre "Booking Page" est présent
  const heading = screen.getByText(/Booking Page/i);
  expect(heading).toBeInTheDocument();

  // Vérifie que le formulaire de réservation est présent
  const form = screen.getByRole('form');
  expect(form).toBeInTheDocument();
});

// Test for initializeTimes function
test('renders the select options and collects their values into an array', () => {

  const dispatch = jest.fn();

  render(<BookingForm availableTimes={initializeTimes()} dispatch={dispatch} />);

  const selectElement = screen.getByLabelText(/Time/i);
  const options = Array.from(selectElement.options).map(option => option.value);

  expect(options).toEqual(['', ...initializeTimes()]);
});

// The array should not be empty
test('updateTimes returns a non-empty array for UPDATE_DATE action', () => {
  const initialState = initializeTimes();
  const action = { type: 'UPDATE_DATE', payload: '2023-12-25' };

  const newState = updateTimes(initialState, action);

  expect(newState).not.toHaveLength(0);
});

test('verify attribute of form', () => {
  const result = render(<BookingForm availableTimes={initializeTimes()} />);
  const inputDate = result.container.querySelector('#date')
  expect(inputDate).toHaveAttribute('id', 'date');
})

test('should validate the form and handle submission with invalid inputs', async () => {
  const submitFormMock = jest.fn();

  render(<BookingForm availableTimes={initializeTimes()} dispatch={submitFormMock} submitForm={submitFormMock} />);

  const dateInput = screen.getByLabelText(/Date/i);
  const timeSelect = screen.getByLabelText(/Time/i);
  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  const submitButton = screen.getByText(/Submit Reservation/i);

  fireEvent.change(dateInput, { target: { value: '' } });
  fireEvent.change(timeSelect, { target: { value: '' } });
  fireEvent.change(guestsInput, { target: { value: '' } });
  fireEvent.change(occasionSelect, { target: { value: '' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    expect(screen.getByText('Number of guests is required')).toBeInTheDocument();
    expect(screen.getByText('Occasion is required')).toBeInTheDocument();
  });

  expect(submitFormMock).not.toHaveBeenCalled();


});
