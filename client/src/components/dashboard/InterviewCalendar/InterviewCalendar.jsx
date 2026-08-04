import { FaCalendarAlt, FaClock } from "react-icons/fa";
import "./InterviewCalendar.css";

function InterviewCalendar() {
  const interviews = [
    {
      company: "Google",
      role: "SDE Intern",
      time: "10:00 AM",
    },
    {
      company: "Microsoft",
      role: "Frontend Engineer",
      time: "02:30 PM",
    },
    {
      company: "Amazon",
      role: "Software Engineer",
      time: "05:00 PM",
    },
  ];

  return (
    <section className="calendar-card">

      <div className="calendar-header">

        <div>

          <h2>Upcoming Interviews</h2>

          <p>Today's Schedule</p>

        </div>

        <FaCalendarAlt className="calendar-icon"/>

      </div>

      <div className="calendar-list">

        {interviews.map((item,index)=>(

          <div className="calendar-item" key={index}>

            <div>

              <h4>{item.company}</h4>

              <span>{item.role}</span>

            </div>

            <div className="calendar-time">

              <FaClock/>

              {item.time}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default InterviewCalendar;