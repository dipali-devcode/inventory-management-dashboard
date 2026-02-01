import "./LowStockReportTable.css"

const LOW_STOCK_THRESHOLD = 20;

const LowStockReportTable = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  const lowStockProducts = safeProducts.filter(
    (product) => product.stock <= LOW_STOCK_THRESHOLD
  );

  if (lowStockProducts.length === 0) {
    return <p>No low stock items 🎉</p>;
  }

  return (
    <div className="low-stock-report-table">
      <h3>Low Stock Report</h3>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Current Stock</th>
            <th>Status</th>
          </tr>
        </thead>
<tbody>
  {lowStockProducts.map((product) => {
    const isOut = product.stock === 0;

    return (
      <tr key={product.id}>
        <td data-label="Product">{product.title}</td>
        <td data-label="Category">{product.category}</td>
        <td data-label="Current Stock">{product.stock}</td>
        <td data-label="Status">
          <span
            className={`status-badge ${
              isOut ? "status-out" : "status-low"
            }`}
          >
            {isOut ? "Out of Stock" : "Low Stock"}
          </span>
        </td>
      </tr>
    );
  })}
</tbody>

      </table>
    </div>
  );
};

export default LowStockReportTable;
