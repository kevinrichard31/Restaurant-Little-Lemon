import './Menu.scss';

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav id="menu">
      <div className="child-nav">
        <Link to="/">
          <img src="/logo.jpg" alt="Logo" />

        </Link>
        <ul>
          <li>Home</li>
          <li><Link to="/booking">Reservations</Link></li>
        </ul>
      </div>
    </nav>
  );
}


export default Menu;
