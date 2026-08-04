import { FaFilePdf } from "react-icons/fa";
import "./ResumePreview.css";

function ResumePreview() {
  return (
    <div className="preview-card">

      <div className="preview-header">

        <h2>Resume Preview</h2>

        <span>No File</span>

      </div>

      <div className="preview-body">

        <div className="preview-icon">

          <FaFilePdf />

        </div>

        <h3>No Resume Uploaded</h3>

        <p>
          Upload your resume to preview it here before AI analysis.
        </p>

      </div>

    </div>
  );
}

export default ResumePreview;