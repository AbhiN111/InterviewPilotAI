import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaMicrophone,
  FaFileAlt,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaRobot,
  FaChevronLeft,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaChartPie />,
      path: "/dashboard",
    },
    {
      title: "Interview",
      icon: <FaMicrophone />,
      path: "/interview-setup",
    },
    {
      title: "Resume Analyzer",
      icon: <FaFileAlt />,
      path: "/resume-analyzer",
    },
    {
      title: "History",
      icon: <FaHistory />,
      path: "/history",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <aside className="sidebar">

      {/* ==========================
              LOGO
      =========================== */}

      <div className="sidebar-header">

        <div className="sidebar-logo">

          <div className="logo-circle">

            <FaRobot />

          </div>

          <div className="logo-content">

            <h2>InterviewPilot</h2>

            <p>AI Interview Platform</p>

          </div>

        </div>

        <button
          className="collapse-btn"
          title="Collapse Sidebar"
        >
          <FaChevronLeft />
        </button>

      </div>

      {/* ==========================
            NAVIGATION
      =========================== */}

      <nav className="sidebar-menu">

        {menuItems.map((item) => (

          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >

            <div className="sidebar-icon" >

              {item.icon}

            </div>

            <span className="sidebar-text">

              {item.title}

            </span>

          </NavLink>

        ))}

      </nav>

      {/* ==========================
              FOOTER
      =========================== */}

      <div className="sidebar-footer">

        <button className="logout-btn">

          <FaSignOutAlt />

          <span>Logout</span>

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;