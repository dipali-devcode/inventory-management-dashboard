import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/authSlice";
import { FiUser } from "react-icons/fi";

import "./Settings.css";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="settings-page">
      <h2 className="page-title">Settings</h2>

      <section className="settings-card">
        <h3>Profile</h3>

        <div className="settings-card-content profile-section">
          <div className="profile-info">
            <div className="avatar-placeholder">
              <FiUser />
            </div>

            <div>
              <p className="profile-email">{user?.email}</p>
              <p className="muted">Logged in user</p>
            </div>
          </div>

          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>

      <section className="settings-card">
        <h3>Application Info</h3>

        <div className="settings-card-content app-info-section">
          <div className="info-row">
            <span className="info-label">Application: &nbsp;</span>
            <span className="info-value">InventoryPro</span>
          </div>

          <div className="info-row">
            <span className="info-label">Version: &nbsp;</span>
            <span className="info-value">v1.0.0</span>
          </div>

          <div className="info-row">
            <span className="info-label">Environment: &nbsp;</span>
            <span className="info-value">Production</span>
          </div>

          <div className="info-row">
            <span className="info-label">Built With: &nbsp;</span>
            <span className="info-value">React, Redux Toolkit, Firebase</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
