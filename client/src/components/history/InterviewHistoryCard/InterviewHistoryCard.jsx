import {
  FaCalendarAlt,
  FaClock,
  FaChartLine,
  FaEye,
  FaTrash,
} from "react-icons/fa";

import "./InterviewHistoryCard.css";

function InterviewHistoryCard({ interview }) {

  return (

    <div className="history-card">

      <div className="history-top">

        <div>

          <h2>{interview.company}</h2>

          <p>{interview.role}</p>

        </div>

        <span className={`status ${interview.status.toLowerCase()}`}>

          {interview.status}

        </span>

      </div>

      <div className="history-meta">

        <span>

          <FaCalendarAlt />

          {interview.date}

        </span>

        <span>

          <FaClock />

          {interview.duration}

        </span>

        <span>

          <FaChartLine />

          {interview.score}%

        </span>

      </div>

      <div className="history-actions">

        <button className="view-btn">

          <FaEye />

          View Report

        </button>

        <button className="delete-btn">

          <FaTrash />

          Delete

        </button>

      </div>

    </div>

  );
}

export default InterviewHistoryCard;