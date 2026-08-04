import "./Testimonials.css";
import Container from "./common/Container";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer Intern",
      text: "InterviewPilot AI completely changed the way I prepared. The AI feedback helped me improve every interview.",
    },
    {
      name: "Sneha Patil",
      role: "Frontend Developer",
      text: "The mock interviews felt realistic, and the analytics highlighted exactly where I needed to improve.",
    },
    {
      name: "Aman Verma",
      role: "Computer Engineering Student",
      text: "A beautiful platform with useful AI insights. It boosted my confidence before placement season.",
    },
  ];

  return (
    <section className="testimonials">
      <Container>

        <div className="section-title">
          <span>TESTIMONIALS</span>

          <h2>Students Love InterviewPilot AI</h2>

          <p>
            Hear what learners say after practicing
            with our AI-powered interview platform.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="testimonial-user">

                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Testimonials;