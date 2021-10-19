import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="">
    <div className="flex navbar align">
      <div className="nav-left">
        <Link to="/">
          <span className="logo">0nlineCourses</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
