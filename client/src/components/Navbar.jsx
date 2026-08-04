import Container from "./common/Container";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <Container>

        <Link className="logo" to="/">
          <FaRobot className="logo-icon" />
          <span>InterviewPilot AI</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>

          <Link className="register-btn" to="/register">
            Register
          </Link>
        </div>

      </Container>
    </nav>
  );
}

export default Navbar;