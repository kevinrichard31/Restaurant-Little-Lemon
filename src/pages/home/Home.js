import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero-scene">
        <div className="container">
          <div className="text-content">
            <h1>Little Lemon</h1>
            <div className="location">Chicago</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores laboriosam aut minima iure inventore architecto porro consectetur eaque non sed natus, exercitationem dolor? Facilis totam deleniti soluta ea harum.</p>
            <Link to="/booking">
            <button>Reserve a table</button>
            </Link>
          </div>
          <div className="image-container">
            <img src="./food1.png" alt="Delicious food" />
          </div>
        </div>
      </section>

      <section>
        <div className="title-specials">
          <h2>Specials</h2>
          <div className='order-online'>
          <Link to="/booking">
          <button>Order online</button>
          </Link>
          </div>
        </div>
        <div className="container-specials">
          <div className="card">
            <img src="./food2.jpg" alt="Greek salad" />
            <div className="card-content">
              <h3>Greek salad</h3>
              <div className="price">15€</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptatem et recusandae debitis quas perferendis iste illo.</p>
              <Link to="/booking">Order a delivery
            </Link>
            </div>
          </div>

          <div className="card">
            <img src="./food2.jpg" alt="Greek salad" />
            <div className="card-content">
              <h3>Greek salad</h3>
              <div className="price">15€</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptatem et recusandae debitis quas perferendis iste illo.</p>
              <Link to="/booking">Order a delivery
            </Link>
            </div>
          </div>

          <div className="card">
            <img src="./food2.jpg" alt="Greek salad" />
            <div className="card-content">
              <h3>Greek salad</h3>
              <div className="price">15€</div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptatem et recusandae debitis quas perferendis iste illo.</p>
              <Link to="/booking">Order a delivery
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
