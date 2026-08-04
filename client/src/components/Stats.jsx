import "./Stats.css";
import Container from "./common/Container";

function Stats() {
  const stats = [
    {
      number: "15K+",
      label: "Mock Interviews",
    },
    {
      number: "96%",
      label: "Success Rate",
    },
    {
      number: "50+",
      label: "Top Companies",
    },
    {
      number: "24/7",
      label: "AI Availability",
    },
  ];

  return (
    <section className="stats">
      <Container>
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;