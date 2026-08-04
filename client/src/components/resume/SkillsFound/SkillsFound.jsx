import "./SkillsFound.css";

function SkillsFound() {

  const skills = [
    "Java",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "REST API",
    "Bootstrap",
  ];

  return (
    <div className="skills-card">

      <div className="skills-header">

        <h2>Skills Detected</h2>

        <span>{skills.length} Skills</span>

      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <span
            key={index}
            className="skill-chip"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}

export default SkillsFound;