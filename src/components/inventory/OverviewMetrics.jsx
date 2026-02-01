import "./OverviewMetrics.css";
import {
  FiBox,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
} from "react-icons/fi";

const OverviewMetrics = ({ products }) => {
  const totalProducts = products.length;

  const inStockCount = products.filter((product) => product.stock > 50).length;

  const lowStockCount = products.filter(
    (product) => product.stock > 0 && product.stock <= 49,
  ).length;

  const outOfStockCount = products.filter(
    (product) => product.stock === 0,
  ).length;

  return (
    <div className="overview-section main">
      <h3>Overview Metrics</h3>

      <div className="overview-metrics">
        <div className="metric-card">
          <div className="metric-icon blue">
            <FiBox />
          </div>
          <div className="metric-info">
            <h4>Total Products</h4>
            <p className="metric-value">{totalProducts}</p>
            <span>All items in inventory</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon green">
            <FiCheckCircle />
          </div>
          <div className="metric-info">
            <h4>In-Stock Items</h4>
            <p className="metric-value">{inStockCount}</p>
            <span>Stock greater than 50</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon orange">
            <FiAlertTriangle />
          </div>
          <div className="metric-info">
            <h4>Low Stock Items</h4>
            <p className="metric-value">{lowStockCount}</p>
            <span>Stock 1 to 49</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon red">
            <FiXCircle />
          </div>
          <div className="metric-info">
            <h4>Out of Stock Items</h4>
            <p className="metric-value">{outOfStockCount}</p>
            <span>Stock equals 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewMetrics;
