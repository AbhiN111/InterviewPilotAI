import {
  FaChartLine,
  FaFileAlt,
  FaMicrophone,
  FaFire,
  FaArrowUp,
} from "react-icons/fa";

import "./StatsCards.css";

function StatsCards() {

  const stats = [
    {
      title: "AI Interview Score",
      value: "94%",
      change: "+8.2%",
      subtitle: "Compared to last week",
      icon: <FaChartLine />,
      color: "blue",
    },
    {
      title: "Resume Score",
      value: "88%",
      change: "+5.4%",
      subtitle: "ATS Optimization",
      icon: <FaFileAlt />,
      color: "purple",
    },
    {
      title: "Mock Interviews",
      value: "34",
      change: "+12",
      subtitle: "Completed this month",
      icon: <FaMicrophone />,
      color: "cyan",
    },
    {
      title: "Current Streak",
      value: "18",
      change: "+3 Days",
      subtitle: "Keep it going 🔥",
      icon: <FaFire />,
      color: "orange",
    },
  ];

  return (

    <section className="stats-grid">

      {stats.map((item, index) => (

        <div
          className={`stat-card ${item.color}`}
          key={index}
        >

          <div className="stat-top">

            <div className="stat-icon">

              {item.icon}

            </div>

            <div className="trend-badge">

              <FaArrowUp />

              <span>{item.change}</span>

            </div>

          </div>

          <div className="stat-body">

            <h2>

              {item.value}

            </h2>

            <h4>

              {item.title}

            </h4>

            <p>

              {item.subtitle}

            </p>

          </div>

          <div className="progress-line">

            <div className="progress-fill"></div>

          </div>

        </div>

      ))}

    </section>

  );
}

export default StatsCards;