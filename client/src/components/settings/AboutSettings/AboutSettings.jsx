import {
  FaInfoCircle,
  FaShieldAlt,
  FaFileContract,
  FaHeadset,
  FaChevronRight,
} from "react-icons/fa";

import "./AboutSettings.css";

function AboutSettings() {
  return (
    <div className="settings-card">

      <h2>About</h2>

      <div className="about-row">

        <div className="about-left">

          <div className="about-icon version">
            <FaInfoCircle />
          </div>

          <div>

            <h3>Application Version</h3>

            <p>InterviewPilot AI v1.0.0</p>

          </div>

        </div>

      </div>

      <div className="about-row">

        <div className="about-left">

          <div className="about-icon privacy">
            <FaShieldAlt />
          </div>

          <div>

            <h3>Privacy Policy</h3>

            <p>Read how we collect and protect your information.</p>

          </div>

        </div>

        <button className="about-btn">

          View

          <FaChevronRight />

        </button>

      </div>

      <div className="about-row">

        <div className="about-left">

          <div className="about-icon terms">
            <FaFileContract />
          </div>

          <div>

            <h3>Terms & Conditions</h3>

            <p>Review the terms for using InterviewPilot AI.</p>

          </div>

        </div>

        <button className="about-btn">

          View

          <FaChevronRight />

        </button>

      </div>

      <div className="about-row">

        <div className="about-left">

          <div className="about-icon support">
            <FaHeadset />
          </div>

          <div>

            <h3>Contact Support</h3>

            <p>Need help? Reach out to our support team.</p>

          </div>

        </div>

        <button className="about-btn">

          Contact

          <FaChevronRight />

        </button>

      </div>

    </div>
  );
}

export default AboutSettings;