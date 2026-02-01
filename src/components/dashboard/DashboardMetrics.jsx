import {
  FiBox,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
} from "react-icons/fi";
import "./DashboardMetrics.css";

const DashboardMetrics = ({ products }) => {
  const totalProducts = products.length;
  const inStock = products.filter((p) => p.stock >= 20).length;
  const lowStock = products.filter((p) => p.stock > 0 && p.stock < 20).length;
  const outOfStock = products.filter((p) => p.stock === 0).length;

  return (
    <div className="main">
      <h3>Overview</h3>
      <div className="metrics-grid">
        <div className="metric-card">
          <FiBox className="icon blue" />
          <div>
            <h3>{totalProducts}</h3>
            <p>Total Products</p>
          </div>
        </div>

        <div className="metric-card">
          <FiCheckCircle className="icon blue" />
          <div>
            <h3>{inStock}</h3>
            <p>In Stock</p>
          </div>
        </div>

        <div className="metric-card">
          <FiAlertTriangle className="icon blue" />
          <div>
            <h3>{lowStock}</h3>
            <p>Low Stock</p>
          </div>
        </div>

        <div className="metric-card">
          <FiXCircle className="icon blue" />
          <div>
            <h3>{outOfStock}</h3>
            <p>Out of Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMetrics;
