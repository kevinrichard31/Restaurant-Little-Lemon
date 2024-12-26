import './BookingForm.scss';
import React, { useState } from 'react';

function BookingForm(props) {
  const [isComplete, setIsComplete] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState();

  const handleClickForm = () => {
    console.log(date)
    console.log(time)
    console.log(guests)
    console.log(occasion)
  }

  return (
    <div>
      <h2>Booking Page</h2>
      <div className='container-form'>
        <div className='container-date'>
          <label htmlFor="date">Date :</label>
          <input type="date" id="date" onChange={(e) => {setDate(e.target.value)}}/>
        </div>

        <div className='container-time'>
          <label htmlFor="time">Time :</label>
          <select id="time" onChange={(e)=>setTime(e.target.value)}>
            {props.availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        {/* Number of Guests */}
        <div className='container-guests'>
          <label htmlFor="guests">Number of Guests :</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="20"
            defaultValue="1"
            onChange={(e)=>setGuests(e.target.value)}
          />
        </div>

        {/* Occasion Selector */}
        <div className='container-occasion'>
          <label htmlFor="occasion">Occasion :</label>
          <select id="occasion" onChange={(e)=>setOccasion(e.target.value)}>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <button onClick={handleClickForm}>Send form</button>
      </div>


      {/* Vous pouvez ajouter un formulaire ou un calendrier de réservation ici */}
    </div>
  );
}

export default BookingForm;
