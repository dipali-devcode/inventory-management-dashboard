import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./CategoryAnalytics.css";

const CategoryAnalytics = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  const categoryMap = {};

  safeProducts.forEach((product) => {
    const category = product.category || "Uncategorized";

    if (!categoryMap[category]) {
      categoryMap[category] = {
        category,
        productCount: 0,
        stockVolume: 0,
      };
    }

    categoryMap[category].productCount += 1;
    categoryMap[category].stockVolume += product.stock;
  });

  const chartData = Object.values(categoryMap);

  if (chartData.length === 0) {
    return <p>No category analytics available</p>;
  }

  return (
    <div className="category-analytics-card main">
      <h3>Category-wise Inventory Analysis</h3>

      <div className="category-chart-wrapper">
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={chartData} barGap={8}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis
              dataKey="category"
              interval={0}
              angle={-20}
              textAnchor="end"
              tick={{ fontSize: 11 }}
            />

            <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="productCount"
              name="Number of Products"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="stockVolume"
              name="Stock Volume"
              fill="#ec4899"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryAnalytics;
