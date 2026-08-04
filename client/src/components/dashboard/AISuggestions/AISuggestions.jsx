import {
  FaLightbulb,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "./AISuggestions.css";

function AISuggestions() {

  const suggestions = [
    "Practice Graph Algorithms",
    "Improve Communication Skills",
    "Revise DBMS & SQL",
    "Attempt one Mock Interview",
    "Increase Resume ATS Score",
  ];

  return (
    <section className="ai-suggestions">

      <div className="suggestions-header">

        <div>

          <h2>AI Suggestions</h2>

          <p>Personalized recommendations for you</p>

        </div>

        <FaLightbulb className="idea-icon" />

      </div>

      <div className="suggestions-list">

        {suggestions.map((item, index) => (

          <div className="suggestion-card" key={index}>

            <FaCheckCircle />

            <span>{item}</span>

            <FaArrowRight className="arrow" />

          </div>

        ))}

      </div>

    </section>
  );
}

export default AISuggestions;