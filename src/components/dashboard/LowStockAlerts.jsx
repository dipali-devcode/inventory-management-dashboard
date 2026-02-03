import { AlertTriangle, Ban } from "lucide-react";
import "./LowStockAlerts.css";

const LowStockAlerts = ({ products }) => {
  const alerts = products.filter((p) => p.stock === 0 || p.stock < 20);

  const getFakeUpdatedTime = (id) => {
    const hoursAgo = (id * 7) % 72; 
    return `${hoursAgo} hours ago`;
  };

  return (
    <div className="alerts-card main">
      <h3>Alerts</h3>

      {alerts.map((p) => (
        <div key={p.id} className="alert-row">
          <div className={`alert-icon ${p.stock === 0 ? "danger" : "warning"}`}>
            {p.stock === 0 ? <Ban size={14} /> : <AlertTriangle size={14} />}
          </div>

          <div>
            <div className="alert-text">
              Product <strong>"{p.title}"</strong> is{" "}
              {p.stock === 0
                ? "out of stock"
                : `low on stock (${p.stock} units left)`}
            </div>
            <div className="alert-time">{getFakeUpdatedTime(p.id)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LowStockAlerts;
