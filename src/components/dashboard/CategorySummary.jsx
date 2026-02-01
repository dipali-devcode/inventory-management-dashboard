import "./CategorySummary.css";

const CategorySummary = ({ products }) => {
  const categories = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="categories-card main">
      <h3>Categories</h3>

      <div className="category-grid">
        {Object.entries(categories).map(([cat, count]) => (
          <div key={cat} className="category-pill">
            {cat}
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySummary;
