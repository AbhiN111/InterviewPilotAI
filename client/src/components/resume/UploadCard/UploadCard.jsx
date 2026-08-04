import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import "./UploadCard.css";

function UploadCard() {
  return (
    <div className="upload-card">

      <div className="upload-header">

        <h2>Resume Analyzer</h2>

        <p>
          Upload your resume and let AI analyze its ATS compatibility.
        </p>

      </div>

      <div className="upload-zone">

        <FaCloudUploadAlt className="upload-icon" />

        <h3>Drag & Drop Resume</h3>

        <p>or click to browse</p>

        <button className="upload-btn">

          <FaFilePdf />

          Upload Resume

        </button>

        <span className="upload-note">

          Supported formats: PDF, DOC, DOCX (Max 5 MB)

        </span>

      </div>

    </div>
  );
}

export default UploadCard;