import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Topbar from "../../components/dashboard/Topbar/Topbar";
import WelcomeCard from "../../components/dashboard/WelcomeCard/WelcomeCard";
import StatsCards from "../../components/dashboard/StatsCards/StatsCards";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";
import PerformanceChart from "../../components/dashboard/PerformanceChart/PerformanceChart";
import RecentInterviews from "../../components/dashboard/RecentInterviews/RecentInterviews";
import AISuggestions from "../../components/dashboard/AISuggestions/AISuggestions";
import DailyProgress from "../../components/dashboard/DailyProgress/DailyProgress";
import InterviewCalendar from "../../components/dashboard/InterviewCalendar/InterviewCalendar";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <main className="dashboard-main">

          <WelcomeCard />

          <StatsCards />

          <div className="dashboard-row">

              <div className="dashboard-left">

                  <DailyProgress />

              </div>

              <div className="dashboard-right">

                  <InterviewCalendar />

              </div>

          </div>

          <div className="dashboard-row">

            <div className="dashboard-left">
              <PerformanceChart />
            </div>

            <div className="dashboard-right">
              <AISuggestions />
            </div>

          </div>

          <div className="dashboard-row">

            <div className="dashboard-left">
              <RecentInterviews />
            </div>

            <div className="dashboard-right">
              <QuickActions />
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;