import "./Features.css";
import Container from "./common/Container";
import {
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaTrophy,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Mock Interviews",
      description:
        "Practice realistic interviews powered by AI with instant responses.",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      description:
        "Receive detailed reports and identify your strengths and weaknesses.",
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Analysis",
      description:
        "Optimize your resume with AI suggestions and ATS-friendly feedback.",
    },
    {
      icon: <FaTrophy />,
      title: "Progress Tracking",
      description:
        "Track every interview and monitor your improvement over time.",
    },
  ];

  return (
    <section className="features">
      <Container>

        <div className="section-title">
          <span>FEATURES</span>
          <h2>Everything You Need To Crack Interviews</h2>
          <p>
            One platform for practice, feedback,
            analytics and career growth.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Features;