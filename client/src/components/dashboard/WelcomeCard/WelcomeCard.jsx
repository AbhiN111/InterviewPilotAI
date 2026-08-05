import {
  FaArrowRight,
  FaBrain,
  FaMicrophone,
  FaChartLine,
  FaBolt,
  FaFileAlt,
} from "react-icons/fa";

import "./WelcomeCard.css";

function WelcomeCard() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section className="welcome-card">

      {/* Background Effects */}

      <div className="bg-glow glow-one"></div>

      <div className="bg-glow glow-two"></div>

      {/* ================= LEFT ================= */}

      <div className="welcome-content">

        <span className="welcome-badge">

          🚀 AI Powered Interview Preparation

        </span>

        <h1>

          {greeting},{" "}

          <span>Abhishek 👋</span>

        </h1>

        <p>

          Master every interview with AI-powered mock interviews,
          resume analysis, real-time feedback, and personalized
          improvement suggestions.

        </p>

        <div className="welcome-actions">

          <button className="start-btn">

            Start Interview

            <FaArrowRight />

          </button>

          <button className="secondary-btn">

            <FaFileAlt />

            Resume Analyzer

          </button>

        </div>

        <div className="hero-stats">

          <div className="hero-stat">

            <h3>34</h3>

            <span>Mock Interviews</span>

          </div>

          <div className="hero-stat">

            <h3>94%</h3>

            <span>AI Score</span>

          </div>

          <div className="hero-stat">

            <h3>18</h3>

            <span>Day Streak</span>

          </div>

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="welcome-right">

        <div className="orbit orbit-one"></div>

        <div className="orbit orbit-two"></div>

        <div className="ai-core">

          <FaBrain />

        </div>

        <div className="floating-card top">

          <FaMicrophone />

          <div>

            <h4>Interview Ready</h4>

            <span>Voice Analysis Active</span>

          </div>

        </div>

        <div className="floating-card middle">

          <FaBolt />

          <div>

            <h4>AI Coach</h4>

            <span>Real-time Suggestions</span>

          </div>

        </div>

        <div className="floating-card bottom">

          <FaChartLine />

          <div>

            <h4>Performance</h4>

            <span>+12% This Week</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WelcomeCard;