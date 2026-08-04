import "./HowItWorks.css";
import Container from "./common/Container";
import {
  FaFileUpload,
  FaMicrophoneAlt,
  FaChartBar,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaFileUpload />,
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up, upload your resume and select your target role.",
    },
    {
      icon: <FaMicrophoneAlt />,
      number: "02",
      title: "Practice With AI",
      description:
        "Answer realistic interview questions powered by AI.",
    },
    {
      icon: <FaChartBar />,
      number: "03",
      title: "Improve Faster",
      description:
        "Receive detailed feedback, scores and personalized suggestions.",
    },
  ];

  return (
    <section className="how-it-works">
      <Container>

        <div className="section-title">
          <span>HOW IT WORKS</span>

          <h2>
            Crack Interviews In
            <br />
            Three Simple Steps
          </h2>

          <p>
            InterviewPilot AI helps you prepare smarter,
            improve faster and land your dream job.
          </p>
        </div>

        <div className="steps">

          {steps.map((step, index) => (

            <div className="step-card" key={index}>

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default HowItWorks;