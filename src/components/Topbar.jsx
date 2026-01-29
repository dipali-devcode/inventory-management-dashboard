import "./Topbar.css";

const Topbar = () => {
  return (
    <header className="topbar">
      {/* Center: Page title */}
      <div className="topbar-center">
        <h2>Inventory Management</h2>
      </div>

      {/* Right: Search + Profile */}
      <div className="topbar-right">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />

        <div className="profile-avatar">
          <span>DP</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
