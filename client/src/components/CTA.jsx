import "./CTA.css";
import Container from "./common/Container";

function CTA() {
  return (
    <section className="cta">
      <Container>
        <div className="cta-card">

          <span className="cta-badge">
            🚀 Ready to Get Started?
          </span>

          <h2>
            Ace Your Next Technical Interview
          </h2>

          <p>
            Join InterviewPilot AI and start practicing with
            AI-powered mock interviews, detailed feedback,
            and personalized analytics.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn">
              Start Free
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default CTA;