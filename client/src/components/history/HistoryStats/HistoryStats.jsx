import {
  FaMicrophone,
  FaChartLine,
  FaTrophy,
  FaClock,
} from "react-icons/fa";

import "./HistoryStats.css";

function HistoryStats() {

  const stats = [
    {
      icon: <FaMicrophone />,
      title: "Total Interviews",
      value: "24",
      color: "blue",
    },
    {
      icon: <FaChartLine />,
      title: "Average Score",
      value: "91%",
      color: "purple",
    },
    {
      icon: <FaTrophy />,
      title: "Best Score",
      value: "98%",
      color: "orange",
    },
    {
      icon: <FaClock />,
      title: "Practice Time",
      value: "18 hrs",
      color: "green",
    },
  ];

  return (

    <div className="history-stats">

      {stats.map((item, index) => (

        <div
          className="history-stat-card"
          key={index}
        >

          <div className={`history-icon ${item.color}`}>

            {item.icon}

          </div>

          <div>

            <h2>{item.value}</h2>

            <p>{item.title}</p>

          </div>

        </div>

      ))}

    </div>

  );
}

export default HistoryStats;