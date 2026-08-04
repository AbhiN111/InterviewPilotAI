import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Topbar from "../../components/dashboard/Topbar/Topbar";

import HistoryStats from "../../components/history/HistoryStats/HistoryStats";
import SearchFilter from "../../components/history/SearchFilter/SearchFilter";
import InterviewHistoryList from "../../components/history/InterviewHistoryList/InterviewHistoryList";

import "./History.css";

function History() {
  return (
    <div className="history-page">

      <Sidebar />

      <div className="history-content">

        <Topbar />

        <main className="history-main">

          <div className="history-header">

            <h1>Interview History</h1>

            <p>
              Review all your previous AI mock interviews and monitor your progress.
            </p>

          </div>

          <HistoryStats />

          <SearchFilter />

          <InterviewHistoryList />

        </main>

      </div>

    </div>
  );
}

export default History;