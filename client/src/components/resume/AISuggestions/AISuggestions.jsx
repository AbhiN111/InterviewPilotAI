import {
  FaLightbulb,
  FaChartLine,
  FaFileAlt,
  FaStar,
} from "react-icons/fa";

import "./AISuggestions.css";

function AISuggestions() {

  const suggestions = [
    {
      icon: <FaLightbulb />,
      title: "Improve Professional Summary",
      text: "Write a concise summary highlighting your experience, technical skills, and career objective."
    },
    {
      icon: <FaChartLine />,
      title: "Add Quantifiable Achievements",
      text: "Mention measurable achievements such as percentages, rankings, or project impact."
    },
    {
      icon: <FaFileAlt />,
      title: "Include More Keywords",
      text: "Incorporate ATS-friendly keywords from the job description where applicable."
    },
    {
      icon: <FaStar />,
      title: "Highlight Strong Projects",
      text: "Showcase your best projects with technologies used, challenges solved, and outcomes."
    }
  ];

  return (

    <div className="ai-card">

      <div className="ai-header">

        <h2>AI Suggestions</h2>

        <span>4 Tips</span>

      </div>

      <div className="ai-list">

        {suggestions.map((item, index) => (

          <div
            key={index}
            className="ai-item"
          >

            <div className="ai-icon">

              {item.icon}

            </div>

            <div className="ai-content">

              <h4>{item.title}</h4>

              <p>{item.text}</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AISuggestions;