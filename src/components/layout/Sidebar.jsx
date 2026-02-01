import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FiHome,
  FiBox,
  FiBarChart2,
  FiFileText,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import Topbar from "./Topbar";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* Mobile menu button */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">InventoryPro</div>

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

      {/* CONTENT COLUMN */}
      <div className="content-column">
        <Topbar />
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
