import "./MissingKeywords.css";

function MissingKeywords() {

  const keywords = [
    "Docker",
    "AWS",
    "Kubernetes",
    "CI/CD",
    "Redis",
    "GraphQL",
    "Microservices",
    "System Design"
  ];

  return (
    <div className="keywords-card">

      <div className="keywords-header">

        <h2>Missing Keywords</h2>

        <span>{keywords.length} Missing</span>

      </div>

      <p className="keywords-info">
        Adding these skills (if applicable to your experience) can improve your ATS score.
      </p>

      <div className="keywords-container">

        {keywords.map((keyword, index) => (

          <span
            key={index}
            className="keyword-chip"
          >
            {keyword}
          </span>

        ))}

      </div>

    </div>
  );
}

export default MissingKeywords;