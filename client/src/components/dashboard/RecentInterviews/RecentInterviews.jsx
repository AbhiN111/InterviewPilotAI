import {
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
} from "react-icons/fa";

import { SiTata } from "react-icons/si";

import {
  FaArrowRight,
  FaClock,
  FaStar,
} from "react-icons/fa";

import "./RecentInterviews.css";

function RecentInterviews() {

  const interviews = [
    {
      company: "Google",
      role: "Software Engineer",
      score: 94,
      duration: "42 mins",
      status: "Excellent",
      icon: <FaGoogle />,
      color: "#4285F4",
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      score: 89,
      duration: "38 mins",
      status: "Good",
      icon: <FaAmazon />,
      color: "#FF9900",
    },
    {
      company: "Microsoft",
      role: "Frontend Engineer",
      score: 91,
      duration: "45 mins",
      status: "Excellent",
      icon: <FaMicrosoft />,
      color: "#00A4EF",
    },
    {
      company: "TCS",
      role: "Java Developer",
      score: 83,
      duration: "35 mins",
      status: "Needs Practice",
      icon: <SiTata />,
      color: "#2563EB",
    },
  ];

  return (
    <section className="recent-section">

      <div className="recent-title">

        <h2>Recent Interviews</h2>

        <button>View All</button>

      </div>

      <div className="recent-grid">

        {interviews.map((item,index)=>(

          <div className="recent-card" key={index}>

            <div className="company-row">

              <div
                className="company-icon"
                style={{background:item.color}}
              >
                {item.icon}
              </div>

              <div>

                <h3>{item.company}</h3>

                <p>{item.role}</p>

              </div>

            </div>

            <div className="score-row">

              <span>

                <FaStar/>

                {item.score}%

              </span>

              <span>

                <FaClock/>

                {item.duration}

              </span>

            </div>

            <div className="bottom-row">

              <div className="status">

                {item.status}

              </div>

              <button>

                View

                <FaArrowRight/>

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RecentInterviews;