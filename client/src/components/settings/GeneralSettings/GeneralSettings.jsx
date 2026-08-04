import { useState } from "react";
import {
  FaMoon,
  FaBell,
  FaMicrophone,
} from "react-icons/fa";

import "./GeneralSettings.css";

function GeneralSettings() {

  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [voice, setVoice] = useState(true);

  return (

    <div className="settings-card">

      <h2>General Settings</h2>

      <div className="setting-row">

        <div className="setting-left">

          <div className="setting-icon">

            <FaMoon />

          </div>

          <div>

            <h3>Dark Mode</h3>

            <p>Use dark appearance throughout the application.</p>

          </div>

        </div>

        <label className="switch">

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />

          <span className="slider"></span>

        </label>

      </div>

      <div className="setting-row">

        <div className="setting-left">

          <div className="setting-icon">

            <FaBell />

          </div>

          <div>

            <h3>Notifications</h3>

            <p>Receive reminders and interview updates.</p>

          </div>

        </div>

        <label className="switch">

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />

          <span className="slider"></span>

        </label>

      </div>

      <div className="setting-row">

        <div className="setting-left">

          <div className="setting-icon">

            <FaMicrophone />

          </div>

          <div>

            <h3>Voice Assistant</h3>

            <p>Enable AI voice during interviews.</p>

          </div>

        </div>

        <label className="switch">

          <input
            type="checkbox"
            checked={voice}
            onChange={() => setVoice(!voice)}
          />

          <span className="slider"></span>

        </label>

      </div>

    </div>

  );
}

export default GeneralSettings;