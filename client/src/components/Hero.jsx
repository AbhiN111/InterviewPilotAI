import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Side */}
        <div className="hero-left">
          <span className="hero-badge">
            🚀 AI-Powered Interview Platform
          </span>

          <h1>
            Ace Your Next
            <br />
            Technical Interview
          </h1>

          <p>
            Practice realistic interviews, receive instant AI feedback,
            and improve your confidence before your dream job.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Interview
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="interview-card">
            <div className="card-header">
              <span className="live-dot"></span>
              Live AI Interview
            </div>

            <div className="chat">
              <div className="ai-message">
                <strong>AI Interviewer</strong>

                <p>
                  Tell me about yourself and your experience with React.
                </p>
              </div>

              <div className="user-message">
                <strong>You</strong>

                <p>
                  I'm a Computer Engineering student passionate about
                  full-stack development and AI.
                </p>
              </div>
            </div>

            <div className="score-box">
              <h4>Interview Score</h4>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <p>84% Confidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;