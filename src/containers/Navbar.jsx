import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Logout from './Logout';

const Navbar = () => (
  <nav className="">
    <div className="flex navbar align">
      <div className="nav-left">
        <Link to="/">
          <span className="logo">0nlineCourses</span>
        </Link>
      </div>
      <div className="nav-right align">
        <Link className="nav login" to="/signin">Sign in</Link>
        <Link className="nav signup" to="/signup">Sign up</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
