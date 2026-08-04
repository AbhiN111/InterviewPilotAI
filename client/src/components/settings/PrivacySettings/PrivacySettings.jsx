import {
  FaTrashAlt,
  FaHistory,
  FaChevronRight,
} from "react-icons/fa";

import "./PrivacySettings.css";

function PrivacySettings() {
  return (

    <div className="settings-card">

      <h2>Data & Privacy</h2>

      <div className="privacy-row">

        <div className="privacy-left">

          <div className="privacy-icon history">

            <FaHistory />

          </div>

          <div>

            <h3>Clear Interview History</h3>

            <p>
              Remove all previous interview records and reports.
            </p>

          </div>

        </div>

        <button className="privacy-btn">

          Clear

          <FaChevronRight />

        </button>

      </div>

      <div className="privacy-row">

        <div className="privacy-left">

          <div className="privacy-icon delete">

            <FaTrashAlt />

          </div>

          <div>

            <h3>Delete Account</h3>

            <p>
              Permanently delete your InterviewPilot account.
            </p>

          </div>

        </div>

        <button className="delete-btn">

          Delete

          <FaChevronRight />

        </button>

      </div>

    </div>

  );
}

export default PrivacySettings;