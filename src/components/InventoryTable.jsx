import { Eye, Star } from "lucide-react";
import "./InventoryTable.css";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

const InventoryTable = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  if (!products.length) {
    return <p>No products found.</p>;
  }

  return (
    <div className="inventory-container">
      <h2>Current Inventory</h2>

      <div className="table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedItems.map((product) => {
              const status =
                product.stock === 0 ? "out" : product.stock < 10 ? "low" : "in";

              return (
                <tr key={product.id}>
                  <td className="product-cell">
                    <img src={product.thumbnail} alt={product.title} />
                    <span>{product.title}</span>
                  </td>

                  <td className="muted">{product.category}</td>
                  <td className="price">${product.price}</td>

                  {/* Stock number only */}
                  <td>{product.stock}</td>

                  <td className="rating">
                    <Star size={14} fill="#facc15" stroke="#facc15" />
                    <span>{product.rating}</span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        status === "in"
                          ? "badge-success"
                          : status === "low"
                            ? "badge-warning"
                            : "badge-danger"
                      }`}
                    >
                      {status === "in"
                        ? "In Stock"
                        : status === "low"
                          ? "Low"
                          : "Out"}
                    </span>
                  </td>

                  <td className="action">
                    <button className="icon-btn">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="btn btn-outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        <span className="small-text">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryTable;
