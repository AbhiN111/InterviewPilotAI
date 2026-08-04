import { FaBullseye, FaFire } from "react-icons/fa";
import "./DailyProgress.css";

function DailyProgress() {
  return (
    <section className="daily-progress">

      <div className="progress-header">

        <h2>Today's Progress</h2>

        <span>2 / 5 Goals Completed</span>

      </div>

      <div className="progress-bar">

        <div className="progress-fill"></div>

      </div>

      <div className="progress-stats">

        <div className="progress-box">

          <FaBullseye />

          <div>

            <h3>5</h3>

            <p>Goals</p>

          </div>

        </div>

        <div className="progress-box">

          <FaFire />

          <div>

            <h3>18</h3>

            <p>Day Streak</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DailyProgress;