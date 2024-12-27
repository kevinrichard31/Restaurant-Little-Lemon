import { render, screen } from '@testing-library/react';
import BookingForm from './components/bookingForm/BookingForm';
import { initializeTimes, updateTimes } from './pages/booking/Booking';

// Mock data for availableTimes prop
const mockAvailableTimes = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
];

test('renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={mockAvailableTimes} />);
  const heading = screen.getByText(/Booking Page/i);
  expect(heading).toBeInTheDocument();
});

// Test for initializeTimes function
test('renders the select options and collects their values into an array', () => {
  const availableTimes = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  const selectElement = screen.getByLabelText(/Time/i);
  const options = Array.from(selectElement.options).map(option => option.value);

  expect(options).toEqual(['', ...availableTimes]);
});

test('updateTimes returns the same state for UPDATE_DATE action', () => {
  const initialState = initializeTimes();
  const action = { type: 'UPDATE_DATE', payload: '2023-12-25' };

  const newState = updateTimes(initialState, action);

  expect(newState).toEqual(initialState);
});