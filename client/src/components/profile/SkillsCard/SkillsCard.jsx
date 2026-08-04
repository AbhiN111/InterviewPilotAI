import "./SkillsCard.css";

function SkillsCard() {

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
    "Docker"
  ];

  return (

    <div className="skills-card-profile">

      <div className="skills-header-profile">

        <h2>Technical Skills</h2>

        <button>Add Skill</button>

      </div>

      <div className="skills-wrapper">

        {skills.map((skill,index)=>(

          <div
            key={index}
            className="skill-badge"
          >
            {skill}
          </div>

        ))}

      </div>

    </div>

  );
}

export default SkillsCard;