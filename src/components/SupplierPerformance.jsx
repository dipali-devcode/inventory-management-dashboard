import "./SupplierPerformance.css";

const getSupplierName = (category) => {
  switch (category) {
    case "smartphones":
      return "SmartPhone Hub";
    case "laptops":
      return "Laptop Innovations";
    case "fragrances":
      return "Fragrance Co.";
    case "skincare":
      return "Skincare Solutions";
    default:
      return "General Supplier";
  }
};

const SupplierPerformance = ({ products }) => {
  const supplierMap = {};

  products.forEach((product) => {
    const supplier = getSupplierName(product.category);

    if (!supplierMap[supplier]) {
      supplierMap[supplier] = { totalProducts: 0, totalStock: 0 };
    }

    supplierMap[supplier].totalProducts += 1;
    supplierMap[supplier].totalStock += product.stock;
  });

  const supplierData = Object.entries(supplierMap).map(([supplier, data]) => {
    const avgStock = Math.round(data.totalStock / data.totalProducts);

    let performance = "Average";
    if (avgStock >= 70) performance = "Good";
    else if (avgStock < 40) performance = "Poor";

    return {
      supplier,
      totalProducts: data.totalProducts,
      avgStock,
      performance,
    };
  });

  return (
    <div className="card-section">
      <h3>Supplier Performance</h3>

      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Total Products</th>
              <th>Average Stock</th>
              <th>Performance</th>
            </tr>
          </thead>

          <tbody>
            {supplierData.map((item) => (
              <tr key={item.supplier}>
                <td>{item.supplier}</td>
                <td>{item.totalProducts}</td>
                <td>{item.avgStock}</td>
                <td>
                  <span className={`badge ${item.performance.toLowerCase()}`}>
                    {item.performance}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierPerformance;
