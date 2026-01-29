import "./ReorderRecommendations.css";
import { FiAlertTriangle } from "react-icons/fi";

const ReorderRecommendations = ({ products }) => {
  const reorderItems = products.filter(
    (product) => product.stock >= 0 && product.stock < 10,
  );

  if (reorderItems.length === 0) return null;

  return (
    <div className="card-section">
      <h3>Reorder Recommendations</h3>

      <div className="reorder-list">
        {reorderItems.map((product) => {
          const reorderQty = 50 - product.stock;

          return (
            <div key={product.id} className="reorder-card">
              <img src={product.thumbnail} alt={product.title} />

              <div className="reorder-info">
                <strong>{product.title}</strong>
                <p>
                  <FiAlertTriangle />
                  Stock: {product.stock} | Reorder: {reorderQty}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReorderRecommendations;
