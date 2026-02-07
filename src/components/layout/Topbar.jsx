import { useLocation, useNavigate } from "react-router-dom";
import { FiUser, FiPackage, FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { logoutUser } from "../../store/authSlice";
import "./Topbar.css";

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      <div className="topbar-right" ref={dropdownRef}>
        <div className="profile-wrapper">
          <div
            className="profile-avatar"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FiUser />
          </div>

          {open && (
            <div className="profile-dropdown">
              <p className="profile-email">{user?.email}</p>

              <button className="logout-btn" onClick={handleLogout}>
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
