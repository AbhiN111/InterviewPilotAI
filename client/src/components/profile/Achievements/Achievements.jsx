import {
  FaTrophy,
  FaStar,
  FaFire,
  FaMedal,
} from "react-icons/fa";

import "./Achievements.css";

function Achievements() {

  const achievements = [

    {
      icon: <FaTrophy />,
      title: "50+ Interviews",
      description: "Completed over 50 AI mock interviews.",
      color: "gold",
    },

    {
      icon: <FaStar />,
      title: "90+ Resume Score",
      description: "Maintained an ATS score above 90%.",
      color: "blue",
    },

    {
      icon: <FaFire />,
      title: "18-Day Streak",
      description: "Practiced interviews for 18 consecutive days.",
      color: "orange",
    },

    {
      icon: <FaMedal />,
      title: "Top Performer",
      description: "Among the highest scoring users.",
      color: "green",
    },

  ];

  return (

    <div className="achievements-card">

      <div className="achievement-header">

        <h2>Achievements</h2>

      </div>

      <div className="achievement-list">

        {achievements.map((item,index)=>(

          <div
            key={index}
            className="achievement-item"
          >

            <div className={`achievement-icon ${item.color}`}>

              {item.icon}

            </div>

            <div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Achievements;