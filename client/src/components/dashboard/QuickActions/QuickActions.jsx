import {
  FaMicrophone,
  FaFileAlt,
  FaCode,
  FaChartBar,
} from "react-icons/fa";

import "./QuickActions.css";

function QuickActions() {
  const actions = [
    {
      title: "Start Interview",
      desc: "Practice with AI interviewer",
      icon: <FaMicrophone />,
      color: "blue",
    },
    {
      title: "Resume Analyzer",
      desc: "Get ATS score instantly",
      icon: <FaFileAlt />,
      color: "purple",
    },
    {
      title: "Practice DSA",
      desc: "Sharpen coding skills",
      icon: <FaCode />,
      color: "cyan",
    },
    {
      title: "View Reports",
      desc: "Track your progress",
      icon: <FaChartBar />,
      color: "orange",
    },
  ];

  return (
    <section className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="actions-grid">

        {actions.map((item, index) => (
          <div className={`action-card ${item.color}`} key={index}>

            <div className="action-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default QuickActions;