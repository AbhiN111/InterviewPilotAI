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

      <div>

        <div className="sidebar-top">

          <div className="sidebar-logo">

            <div className="logo-circle">

              <FaRobot />

            </div>

            <div className="logo-content">

              <h2>InterviewPilot</h2>

              <span>AI Platform</span>

            </div>

          </div>

          <button
            className="collapse-btn"
            title="Collapse Sidebar"
          >

            <FaChevronLeft />

          </button>

        </div>

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

              <div className="sidebar-icon">

                {item.icon}

              </div>

              <span className="sidebar-text">

                {item.title}

              </span>

            </NavLink>

          ))}

        </nav>

      </div>

      <div>

        <div className="storage-card">

          <div className="storage-title">

            <h4>Weekly Goal</h4>

            <span>72%</span>

          </div>

          <div className="storage-bar">

            <div className="storage-fill"></div>

          </div>

          <p>18 of 25 interviews completed</p>

        </div>

        <button className="logout-btn">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;