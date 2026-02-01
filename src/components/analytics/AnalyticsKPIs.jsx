import { FiDollarSign, FiBox, FiPercent, FiX } from "react-icons/fi";
import "./AnalyticsKPIs.css";

const LOW_STOCK_THRESHOLD = 20;

const AnalyticsKPIs = ({ products }) => {
  const totalProducts = products.length;

  const totalInventoryValue = products.reduce(
    (sum, product) => sum + product.price * product.stock,
    0,
  );

  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  const averageStock =
    totalProducts > 0 ? (totalStock / totalProducts).toFixed(1) : 0;

  const lowStockCount = products.filter(
    (p) => p.stock > 0 && p.stock < LOW_STOCK_THRESHOLD,
  ).length;

  const lowStockPercentage =
    totalProducts > 0 ? ((lowStockCount / totalProducts) * 100).toFixed(1) : 0;

  const outOfStockCount = products.filter((p) => p.stock === 0).length;

  return (
    <div className="analytics-kpi-grid">
      <div className="kpi-card">
        <FiDollarSign className="kpi-icon" />
        <p className="kpi-label">Total Inventory Value</p>
        <h3>${totalInventoryValue.toLocaleString()}</h3>
      </div>

      <div className="kpi-card">
        <FiBox className="kpi-icon" />
        <p className="kpi-label">Average Stock per Product</p>
        <h3>{averageStock} units</h3>
      </div>

      <div className="kpi-card">
        <FiPercent className="kpi-icon" />
        <p className="kpi-label">Low Stock Percentage</p>
        <h3>{lowStockPercentage}%</h3>
      </div>

      <div className="kpi-card">
        <FiX className="kpi-icon" />
        <p className="kpi-label">Out of Stock Count</p>
        <h3>{outOfStockCount} items</h3>
      </div>
    </div>
  );
};

export default AnalyticsKPIs;
