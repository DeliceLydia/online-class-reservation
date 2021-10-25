import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="">
    <div className="flex navbar align">
      <div className="nav-left">
        <Link to="/">
          <span className="logo">0nlineCourses</span>
        </Link>
      </div>
      <div className="nav-right align">
        <Link className="nav login" to="/">Sign In</Link>
        <Link className="nav signup" to="/signup">Sign Up</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
