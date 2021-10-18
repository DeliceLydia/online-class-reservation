import { Link } from 'react-router-dom';
import mc from '../assets/online.jpeg';
import cartoon from '../assets/cart.png';
import Navbar2 from './NavBar2';

const Home = () => (
  <div className="homepage">
    <Navbar2 />
    <img src={mc} alt="homepage" />
    <div className="intro">
      <h1 className="intro-h">We Lead In Flexible Learning</h1>
      <p className="intro-p">
        With online courses app you can study whenever and wherever you choose.
        We have students all over the world, and a global reputation as a pioneer
        in the field of flexible learning.
      </p>
    </div>
    <div className="down-info flex">
      <div className="image-info">
        <img src={cartoon} alt="cartoon" />
      </div>
      <div className="text-info center">
        <h2 className="info-head">Transform your lives through online education</h2>
        <p>
          Learners around the world are launching new careers, advancing in their fields,
          and enriching their lives.
        </p>
        <Link className="nav signup" to="/signup">Get started</Link>
      </div>
    </div>
  </div>
);

export default Home;
