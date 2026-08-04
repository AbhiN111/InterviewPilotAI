import { useState } from "react";
import {
  FaBriefcase,
  FaUserGraduate,
  FaClock,
  FaLanguage,
  FaUpload,
  FaPlay,
} from "react-icons/fa";

import "./InterviewSetup.css";

function InterviewSetup() {

  const [form, setForm] = useState({
    role: "Software Engineer",
    experience: "Fresher",
    difficulty: "Medium",
    interviewType: "Technical",
    duration: "30",
    language: "English",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const startInterview = () => {
    console.log(form);
  };

  return (
    <div className="setup-page">

      <div className="setup-container">

        <div className="setup-header">

          <h1>Interview Setup</h1>

          <p>
            Configure your interview preferences before starting your AI mock interview.
          </p>

        </div>

        <div className="setup-card">

          <div className="setup-grid">

            <div className="input-group">

              <label>

                <FaBriefcase />

                Job Role

              </label>

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
              >

                <option>Software Engineer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Java Developer</option>

              </select>

            </div>

            <div className="input-group">

              <label>

                <FaUserGraduate />

                Experience

              </label>

              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
              >

                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>3-5 Years</option>

              </select>

            </div>

            <div className="input-group">

              <label>Difficulty</label>

              <select
                name="difficulty"
                value={form.difficulty}
                onChange={handleChange}
              >

                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>

              </select>

            </div>

            <div className="input-group">

              <label>Interview Type</label>

              <select
                name="interviewType"
                value={form.interviewType}
                onChange={handleChange}
              >

                <option>Technical</option>
                <option>HR</option>
                <option>Behavioral</option>

              </select>

            </div>

            <div className="input-group">

              <label>

                <FaClock />

                Duration

              </label>

              <select
                name="duration"
                value={form.duration}
                onChange={handleChange}
              >

                <option>15</option>
                <option>30</option>
                <option>45</option>
                <option>60</option>

              </select>

            </div>

            <div className="input-group">

              <label>

                <FaLanguage />

                Language

              </label>

              <select
                name="language"
                value={form.language}
                onChange={handleChange}
              >

                <option>English</option>
                <option>Hindi</option>

              </select>

            </div>

          </div>

          <div className="resume-upload">

            <FaUpload />

            <h3>Upload Resume</h3>

            <p>Drag & Drop or Click to Upload</p>

            <input type="file" />

          </div>

          <button
            className="start-interview-btn"
            onClick={startInterview}
          >

            <FaPlay />

            Start AI Interview

          </button>

        </div>

      </div>

    </div>
  );
}

export default InterviewSetup;