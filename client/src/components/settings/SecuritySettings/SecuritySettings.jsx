import {
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaChevronRight,
} from "react-icons/fa";

import "./SecuritySettings.css";

function SecuritySettings() {
  return (

    <div className="settings-card">

      <h2>Account & Security</h2>

      <div className="security-row">

        <div className="security-left">

          <div className="security-icon">

            <FaEnvelope />

          </div>

          <div>

            <h3>Email Address</h3>

            <p>abhishek@example.com</p>

          </div>

        </div>

        <button className="settings-action">

          Change

          <FaChevronRight />

        </button>

      </div>

      <div className="security-row">

        <div className="security-left">

          <div className="security-icon">

            <FaLock />

          </div>

          <div>

            <h3>Password</h3>

            <p>Last changed 12 days ago</p>

          </div>

        </div>

        <button className="settings-action">

          Update

          <FaChevronRight />

        </button>

      </div>

      <div className="security-row">

        <div className="security-left">

          <div className="security-icon">

            <FaShieldAlt />

          </div>

          <div>

            <h3>Two-Factor Authentication</h3>

            <p>Protect your account with an extra layer of security.</p>

          </div>

        </div>

        <button className="settings-action">

          Enable

          <FaChevronRight />

        </button>

      </div>

    </div>

  );
}

export default SecuritySettings;