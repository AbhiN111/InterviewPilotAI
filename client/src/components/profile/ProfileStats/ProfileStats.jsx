import {
  FaRobot,
  FaFileAlt,
  FaMicrophone,
  FaFire,
} from "react-icons/fa";

import "./ProfileStats.css";

function ProfileStats() {

  const stats = [
    {
      title: "AI Score",
      value: "91%",
      icon: <FaRobot />,
      color: "blue",
    },
    {
      title: "Resume Score",
      value: "89%",
      icon: <FaFileAlt />,
      color: "purple",
    },
    {
      title: "Interviews",
      value: "24",
      icon: <FaMicrophone />,
      color: "green",
    },
    {
      title: "Current Streak",
      value: "18 Days",
      icon: <FaFire />,
      color: "orange",
    },
  ];

  return (

    <div className="profile-stats">

      {stats.map((item, index) => (

        <div
          className="profile-stat-card"
          key={index}
        >

          <div className={`profile-stat-icon ${item.color}`}>

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

export default ProfileStats;