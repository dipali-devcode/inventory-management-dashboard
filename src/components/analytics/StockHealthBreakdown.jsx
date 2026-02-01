import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./StockHealthBreakdown.css";

const LOW_STOCK_THRESHOLD = 20;

const COLORS = {
  inStock: "#22c55e",
  lowStock: "#fbbf24",
  outOfStock: "#ef4444",
};

const StockHealthBreakdown = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];
  const total = safeProducts.length;

  const inStock = safeProducts.filter(
    (p) => p.stock > LOW_STOCK_THRESHOLD,
  ).length;

  const lowStock = safeProducts.filter(
    (p) => p.stock > 0 && p.stock <= LOW_STOCK_THRESHOLD,
  ).length;

  const outOfStock = safeProducts.filter((p) => p.stock === 0).length;

  const chartData = total
    ? [
        {
          name: "In Stock",
          value: Math.round((inStock / total) * 100),
          color: COLORS.inStock,
        },
        {
          name: "Low Stock",
          value: Math.round((lowStock / total) * 100),
          color: COLORS.lowStock,
        },
        {
          name: "Out of Stock",
          value: Math.round((outOfStock / total) * 100),
          color: COLORS.outOfStock,
        },
      ]
    : [
        { name: "In Stock", value: 0, color: COLORS.inStock },
        { name: "Low Stock", value: 0, color: COLORS.lowStock },
        { name: "Out of Stock", value: 0, color: COLORS.outOfStock },
      ];

  return (
    <div className="stock-health-card main">
      <h3>Stock Health Breakdown</h3>

      <div className="donut-chart-wrapper">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={70}
              outerRadius={95}
              dataKey="value"
              paddingAngle={4}
              startAngle={90}
              endAngle={-270}
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="stock-health-legend">
        <span className="legend in-stock">
          (In Stock%) {chartData[0].value}
        </span>
        <span className="legend low-stock">
          (Low Stock%) {chartData[1].value}
        </span>
        <span className="legend out-stock">
          (Out of Stock%) {chartData[2].value}
        </span>
      </div>
    </div>
  );
};

export default StockHealthBreakdown;
