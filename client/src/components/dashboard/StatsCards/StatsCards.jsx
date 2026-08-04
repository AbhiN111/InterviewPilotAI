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
      title: "AI Score",
      value: "94%",
      icon: <FaChartLine />,
      change: "+8%",
      color: "blue",
    },
    {
      title: "Resume Score",
      value: "88%",
      icon: <FaFileAlt />,
      change: "+5%",
      color: "purple",
    },
    {
      title: "Interviews",
      value: "34",
      icon: <FaMicrophone />,
      change: "+12",
      color: "cyan",
    },
    {
      title: "Current Streak",
      value: "18 Days",
      icon: <FaFire />,
      change: "+3",
      color: "orange",
    },
  ];

  return (
    <section className="stats-grid">

      {stats.map((item, index) => (

        <div className={`stat-card ${item.color}`} key={index}>

          <div className="stat-icon">
            {item.icon}
          </div>

          <div className="stat-content">

            <h2>{item.value}</h2>

            <p>{item.title}</p>

            <div className="trend">

              <FaArrowUp />

              {item.change} this week

            </div>

          </div>

        </div>

      ))}

    </section>
  );
}

export default StatsCards;