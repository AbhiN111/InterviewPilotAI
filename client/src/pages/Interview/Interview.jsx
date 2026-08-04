import AIAvatar from "../../components/interview/AIAvatar/AIAvatar";
import InterviewChat from "../../components/interview/InterviewChat/InterviewChat";
import InterviewControls from "../../components/interview/InterviewControls/InterviewControls";
import InterviewSidebar from "../../components/interview/InterviewSidebar/InterviewSidebar";

import "./Interview.css";

function Interview() {
  return (
    <section className="interview-page">

      <div className="background-glow glow-left"></div>
      <div className="background-glow glow-right"></div>

      <div className="interview-container">

        <aside className="interview-left">
          <AIAvatar />
        </aside>

        <main className="interview-center">

          <InterviewChat />

          <InterviewControls />

        </main>

        <aside className="interview-right">
          <InterviewSidebar />
        </aside>

      </div>

    </section>
  );
}

export default Interview;