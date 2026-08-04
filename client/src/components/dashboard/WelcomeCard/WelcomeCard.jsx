import {
  FaArrowRight,
  FaBrain,
  FaMicrophone,
  FaChartLine,
} from "react-icons/fa";

import "./WelcomeCard.css";

function WelcomeCard() {
  return (
    <section className="welcome-card">

      <div className="welcome-content">

        <span className="welcome-badge">
          👋 Welcome Back
        </span>

        <h1>
          Good Morning, <span>Abhishek</span>
        </h1>

        <p>
          Ready to ace today's interview? Practice with AI, improve your
          confidence, and track your progress all in one place.
        </p>

        <button className="start-btn">

          Start AI Interview

          <FaArrowRight />

        </button>

      </div>

      <div className="welcome-right">

        <div className="ai-core">

          <FaBrain />

        </div>

        <div className="floating-card top">

          <FaMicrophone />

          <span>Mock Interview</span>

        </div>

        <div className="floating-card bottom">

          <FaChartLine />

          <span>AI Score +12%</span>

        </div>

        <div className="orbit orbit-one"></div>

        <div className="orbit orbit-two"></div>

      </div>

      <div className="bg-glow glow-one"></div>

      <div className="bg-glow glow-two"></div>

    </section>
  );
}

export default WelcomeCard;