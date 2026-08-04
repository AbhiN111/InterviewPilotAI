import {
  FaMicrophone,
  FaFileAlt,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";

import "./ActivityTimeline.css";

function ActivityTimeline() {

  const activities = [

    {
      icon: <FaMicrophone />,
      title: "Completed Google Mock Interview",
      time: "Today • 10:30 AM",
      color: "blue",
    },

    {
      icon: <FaChartLine />,
      title: "AI Score Improved to 91%",
      time: "Yesterday • 7:15 PM",
      color: "purple",
    },

    {
      icon: <FaFileAlt />,
      title: "Resume ATS Score Increased",
      time: "2 Days Ago",
      color: "green",
    },

    {
      icon: <FaTrophy />,
      title: "Unlocked 18-Day Practice Streak",
      time: "4 Days Ago",
      color: "orange",
    },

  ];

  return (

    <div className="timeline-card">

      <div className="timeline-header">

        <h2>Recent Activity</h2>

      </div>

      <div className="timeline-list">

        {activities.map((item,index)=>(

          <div
            key={index}
            className="timeline-item"
          >

            <div className={`timeline-icon ${item.color}`}>

              {item.icon}

            </div>

            <div className="timeline-content">

              <h3>{item.title}</h3>

              <p>{item.time}</p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default ActivityTimeline;