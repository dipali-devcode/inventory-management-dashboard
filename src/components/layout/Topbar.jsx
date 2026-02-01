import { useLocation } from "react-router-dom";
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
        <h2>{getTitle()}</h2>
      </div>

      <div className="topbar-right">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />
        <div className="profile-avatar">DP</div>
      </div>
    </header>
  );
};

export default Topbar;
