import {
  FaBell,
  FaSearch,
  FaMoon,
  FaChevronDown,
} from "react-icons/fa";

import "./Topbar.css";

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search interviews, reports..."
          />
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-btn">
          <FaMoon />
        </button>
        <button className="icon-btn notification-btn">
          <FaBell />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-card">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User"
          />

          <div>
            <h4>Abhishek</h4>
            <span>Computer Engineer</span>
          </div>

          <FaChevronDown />

        </div>
      </div>
    </header>
  );
}

export default Topbar;