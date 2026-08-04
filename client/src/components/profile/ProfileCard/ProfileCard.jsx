import { FaCamera, FaMapMarkerAlt, FaGraduationCap, FaUserEdit } from "react-icons/fa";

import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">

      <div className="profile-cover"></div>

      <div className="profile-avatar">

        <img
          src="https://i.pravatar.cc/180"
          alt="Profile"
        />

        <button className="camera-btn">

          <FaCamera />

        </button>

      </div>

      <h2>Abhishek Nawale</h2>

      <p className="role">
        Computer Engineering Student
      </p>

      <div className="profile-info">

        <div>

          <FaGraduationCap />

          Sinhgad Academy of Engineering

        </div>

        <div>

          <FaMapMarkerAlt />

          Pune, Maharashtra

        </div>

      </div>

      <button className="edit-profile-btn">

        <FaUserEdit />

        Edit Profile

      </button>

    </div>
  );
}

export default ProfileCard;