import "./SlowMovingInventory.css";
import { FiStar } from "react-icons/fi";

const SlowMovingInventory = ({ products }) => {
  const slowMovingItems = products.filter(
    (product) => product.stock >= 50 && product.rating <= 4.4,
  );

  if (slowMovingItems.length === 0) return null;

  return (
    <div className="card-section main">
      <h3>Slow Moving Inventory</h3>

      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {slowMovingItems.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.stock}</td>
                <td className="rating">
                  <FiStar /> {product.rating}
                </td>
                <td className="muted">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SlowMovingInventory;
