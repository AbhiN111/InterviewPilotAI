import "./ATSScore.css";

function ATSScore() {
  const score = 92;

  return (
    <div className="ats-card">

      <div className="ats-header">

        <h2>ATS Score</h2>

        <span>Excellent</span>

      </div>

      <div className="score-circle">

        <svg width="180" height="180">

          <circle
            cx="90"
            cy="90"
            r="75"
            className="circle-bg"
          />

          <circle
            cx="90"
            cy="90"
            r="75"
            className="circle-progress"
            style={{
              strokeDashoffset: 471 - (471 * score) / 100,
            }}
          />

        </svg>

        <div className="score-value">

          <h1>{score}%</h1>

          <p>ATS Match</p>

        </div>

      </div>

      <div className="score-stats">

        <div>

          <h4>Formatting</h4>

          <span>95%</span>

        </div>

        <div>

          <h4>Keywords</h4>

          <span>90%</span>

        </div>

        <div>

          <h4>Readability</h4>

          <span>91%</span>

        </div>

      </div>

    </div>
  );
}

export default ATSScore;