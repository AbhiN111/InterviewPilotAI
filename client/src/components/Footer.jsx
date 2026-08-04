import "./Footer.css";
import Container from "./common/Container";
import { FaRobot } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <Container>

        <div className="footer-top">

          <div className="footer-brand">
            <FaRobot className="footer-logo" />

            <h2>InterviewPilot AI</h2>

            <p>
              AI-powered interview preparation platform
              helping students become placement-ready.
            </p>
          </div>

          <div className="footer-links">

            <div>
              <h4>Product</h4>
              <a href="/">Features</a>
              <a href="/">Pricing</a>
              <a href="/">Dashboard</a>
            </div>

            <div>
              <h4>Company</h4>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Careers</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 InterviewPilot AI • Built by Abhishek Nawale
        </div>

      </Container>
    </footer>
  );
}

export default Footer;