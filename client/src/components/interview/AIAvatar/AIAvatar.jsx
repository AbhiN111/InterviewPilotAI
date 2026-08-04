import {
  FaRobot,
  FaCircle
} from "react-icons/fa";

import "./AIAvatar.css";

function AIAvatar() {
  return (
    <div className="avatar-card">

      <div className="avatar-top">

        <div className="status-live">

          <FaCircle />

          AI Connected

        </div>

      </div>

      <div className="avatar-wrapper">

        <div className="ring ring-1"></div>

        <div className="ring ring-2"></div>

        <div className="ring ring-3"></div>

        <div className="robot-core">

          <FaRobot />

        </div>

      </div>

      <h2>InterviewPilot AI</h2>

      <p>Your Personal Interviewer</p>

      <div className="voice-bars">

        <span></span>

        <span></span>

        <span></span>

        <span></span>

        <span></span>

      </div>

      <div className="avatar-footer">

        Listening...

      </div>

    </div>
  );
}

export default AIAvatar;