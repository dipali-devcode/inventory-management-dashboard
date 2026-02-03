import { useLocation } from "react-router-dom";
import { FiPackage } from "react-icons/fi";
import "./Topbar.css";

const Topbar = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/inventory":
        return "Inventory Management";
      case "/analytics":
        return "Analytics";
      case "/reports":
        return "Reports";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="topbar">
      <div className="topbar-center">
        <h2 className="page-title">{getTitle()}</h2>

        <div className="mobile-logo">
          <span className="mobile-logo-icon">
            <FiPackage />
          </span>
          <span className="mobile-logo-text">InventoryPro</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="profile-avatar">DP</div>
      </div>
    </header>
  );
};

export default Topbar;
