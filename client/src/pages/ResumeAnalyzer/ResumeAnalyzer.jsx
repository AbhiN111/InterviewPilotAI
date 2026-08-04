import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Topbar from "../../components/dashboard/Topbar/Topbar";

import UploadCard from "../../components/resume/UploadCard/UploadCard";
import ATSScore from "../../components/resume/ATSScore/ATSScore";
import ResumePreview from "../../components/resume/ResumePreview/ResumePreview";
import SkillsFound from "../../components/resume/SkillsFound/SkillsFound";
import MissingKeywords from "../../components/resume/MissingKeywords/MissingKeywords";
import AISuggestions from "../../components/resume/AISuggestions/AISuggestions";

import "./ResumeAnalyzer.css";

function ResumeAnalyzer() {
  return (
    <div className="resume-page">

      <Sidebar />

      <div className="resume-content">

        <Topbar />

        <main className="resume-main">

          <div className="resume-grid">

            {/* LEFT */}

            <div className="resume-left">

              <UploadCard />

              <SkillsFound />

              <MissingKeywords />

            </div>

            {/* RIGHT */}

            <div className="resume-right">

              <ATSScore />

              <ResumePreview />

              <AISuggestions />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default ResumeAnalyzer;