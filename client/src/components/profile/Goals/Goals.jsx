import {
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";

import "./Goals.css";

function Goals() {

  const goals = [

    {
      title: "Complete 100 Interviews",
      progress: 65,
    },

    {
      title: "Reach AI Score 95+",
      progress: 91,
    },

    {
      title: "Resume Score 95%",
      progress: 89,
    },

    {
      title: "30-Day Practice Streak",
      progress: 60,
    },

  ];

  return (

    <div className="goals-card">

      <div className="goals-header">

        <h2>

          <FaBullseye />

          Goals

        </h2>

      </div>

      <div className="goals-list">

        {goals.map((goal,index)=>(

          <div
            key={index}
            className="goal-item"
          >

            <div className="goal-top">

              <span>{goal.title}</span>

              <span>{goal.progress}%</span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width:`${goal.progress}%`
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      <button className="goal-btn">

        <FaCheckCircle />

        Update Goals

      </button>

    </div>

  );
}

export default Goals;