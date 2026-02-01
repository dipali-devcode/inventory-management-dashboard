import "./CategorySummaryTable.css"

const CategorySummaryTable = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  const categoryMap = {};

  safeProducts.forEach((product) => {
    const category = product.category || "Uncategorized";

    if (!categoryMap[category]) {
      categoryMap[category] = {
        category,
        productCount: 0,
        totalStock: 0,
      };
    }

    categoryMap[category].productCount += 1;
    categoryMap[category].totalStock += product.stock;
  });

  const tableData = Object.values(categoryMap).map((item) => ({
    ...item,
    averageStock: Math.round(item.totalStock / item.productCount),
  }));

  if (tableData.length === 0) {
    return <p>No category summary available</p>;
  }

  return (
    <div className="category-summary-table main">
      <h3>Category Summary</h3>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Count</th>
            <th>Total Stock</th>
            <th>Avg Stock</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.category}>
              <td data-label="Category">{row.category}</td>
              <td data-label="Product Count">{row.productCount}</td>
              <td data-label="Total Stock">{row.totalStock}</td>
              <td data-label="Average Stock">{row.averageStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategorySummaryTable;
