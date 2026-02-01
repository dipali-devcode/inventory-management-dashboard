const RecentProducts = ({ products }) => {
  const recentProducts = [...products].slice(-5).reverse();

  if (recentProducts.length === 0) {
    return <p>No recent products</p>;
  }

  const getStockBadge = (stock) => {
    if (stock === 0) {
      return { text: "Out of Stock", className: "badge badge-danger" };
    }
    if (stock < 20) {
      return { text: "Low Stock", className: "badge badge-warning" };
    }
    return { text: "In Stock", className: "badge badge-success" };
  };

  return (
    <div className="recent-products card main">
      <h3>Recent Products</h3>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {recentProducts.map((product) => {
              const badge = getStockBadge(product.stock);

              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>
                    <span className={badge.className}>{badge.text}</span>
                  </td>
                  <td>
                    <button className="btn btn-outline">View</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProducts;
