import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  FiHome,
  FiBox,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiMenu,
  FiPackage,
} from "react-icons/fi";
import Topbar from "./Topbar";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-layout">
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <span className="logo-icon">
            <FiPackage />
          </span>
          <span className="logo-text">InventoryPro</span>
        </div>

        <nav>
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            <FiHome />
            Dashboard
          </NavLink>

          <NavLink to="/inventory" onClick={() => setIsOpen(false)}>
            <FiBox />
            Inventory
          </NavLink>

          <NavLink to="/analytics" onClick={() => setIsOpen(false)}>
            <FiBarChart2 />
            Analytics
          </NavLink>

          <NavLink to="/reports" onClick={() => setIsOpen(false)}>
            <FiFileText />
            Reports
          </NavLink>

          <NavLink to="/settings" onClick={() => setIsOpen(false)}>
            <FiSettings />
            Settings
          </NavLink>
        </nav>
      </aside>

      <div className="content-column">
        <Topbar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
