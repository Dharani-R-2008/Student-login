import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">

      <div className="logo">
        CareerHub
      </div>

      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/jobs">
          Jobs
        </Link>

        <Link to="/applications">
          Applications
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/">
          Logout
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
