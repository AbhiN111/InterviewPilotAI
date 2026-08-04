import {
  FaClock,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import "./InterviewSidebar.css";

function InterviewSidebar() {

  return (
    <aside className="interview-sidebar">

      <div className="sidebar-card">

        <FaClock className="sidebar-icon"/>

        <h3>Elapsed Time</h3>

        <h2>09 : 42</h2>

      </div>

      <div className="sidebar-card">

        <FaBrain className="sidebar-icon"/>

        <h3>Confidence</h3>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: "82%" }}
          ></div>

        </div>

        <p>82%</p>

      </div>

      <div className="sidebar-card">

        <FaChartLine className="sidebar-icon"/>

        <h3>Question Progress</h3>

        <h2>3 / 10</h2>

      </div>

      {/* <div className="sidebar-card">

        <FaCheckCircle className="sidebar-icon"/>

        <h3>AI Feedback</h3>

        <ul>

          <li>✔ Good Confidence</li>

          <li>✔ Clear Communication</li>

          <li>✔ Maintain Eye Contact</li>

        </ul>

      </div> */}

    </aside>
  );
}

export default InterviewSidebar;