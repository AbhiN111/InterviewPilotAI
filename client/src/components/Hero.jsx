import "./Hero.css";
import Container from "./common/Container";
import heroAI from "../assets/hero-ai.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-blur blur-one"></div>
      <div className="hero-blur blur-two"></div>

      <Container>
        <div className="hero-content">
          {/* Left Side */}
          <div className="hero-left">
            <span className="hero-badge">
              🚀 AI-Powered Interview Platform
            </span>

            <h1>
              Ace Your Next
              <span> Technical Interview</span>
            </h1>

            <p>
              Practice AI-powered mock interviews with personalized feedback,
              performance analytics, and confidence-building sessions designed
              to help you crack your dream job.
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
            <img
              src={heroAI}
              alt="AI Interview Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;