import './App.css';
import Menu from './components/menu/Menu';
import Booking from './pages/booking/Booking';
import ConfirmedBooking from './pages/confirmedBooking/ConfirmedBooking';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;