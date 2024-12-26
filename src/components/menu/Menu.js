import './Menu.scss';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <div className="child-nav">
        <Link to="/">
          <img src="/logo.jpg" alt="Logo" />

        </Link>
        <ul>
          <li>Home</li>
          <li><Link to="/booking">About</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li>Order online</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}


export default Menu;
