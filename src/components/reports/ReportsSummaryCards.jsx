import {
  Package,
  Boxes,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import "./ReportsSummaryCards.css";

const LOW_STOCK_THRESHOLD = 20;

const ReportsSummaryCards = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  const totalProducts = safeProducts.length;

  const totalStockUnits = safeProducts.reduce(
    (sum, product) => sum + product.stock,
    0
  );

  const lowStockItems = safeProducts.filter(
    (product) =>
      product.stock > 0 && product.stock <= LOW_STOCK_THRESHOLD
  ).length;

  const outOfStockItems = safeProducts.filter(
    (product) => product.stock === 0
  ).length;

  return (
    <div className="reports-wrapper">
      <h2 className="reports-title">Inventory Reports</h2>
      <p className="reports-subtitle">
        Comprehensive overview of your current inventory status.
      </p>

      <div className="reports-summary-cards">
        <div className="summary-card">
          <div className="card-header">
            <span>Total Products</span>
            <Package size={20} />
          </div>
          <p className="card-value">{totalProducts}</p>
        </div>

        <div className="summary-card">
          <div className="card-header">
            <span>Total Stock Units</span>
            <Boxes size={20} />
          </div>
          <p className="card-value">{totalStockUnits}</p>
        </div>

        <div className="summary-card">
          <div className="card-header">
            <span>Low Stock Items</span>
            <AlertTriangle size={20} />
          </div>
          <p className="card-value">{lowStockItems}</p>
        </div>

        <div className="summary-card">
          <div className="card-header">
            <span>Out of Stock Items</span>
            <XCircle size={20} />
          </div>
          <p className="card-value">{outOfStockItems}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportsSummaryCards;
