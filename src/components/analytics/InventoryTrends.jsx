import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./InventoryTrends.css";

const InventoryTrends = ({ products }) => {
  const safeProducts = Array.isArray(products) ? products : [];

  const totalStock = safeProducts.reduce(
    (sum, product) => sum + product.stock,
    0,
  );

  const data = [
    { month: "Jan", stock: Math.round(totalStock * 0.75) },
    { month: "Feb", stock: Math.round(totalStock * 0.8) },
    { month: "Mar", stock: Math.round(totalStock * 0.78) },
    { month: "Apr", stock: Math.round(totalStock * 0.85) },
    { month: "May", stock: Math.round(totalStock * 0.9) },
    { month: "Jun", stock: totalStock },
  ];

  return (
    <div className="inventory-trends-card main">
      <h3>Inventory Stock Level Trends</h3>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 12 }} />
            <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="stock"
              name="Stock Level"
              stroke="#6366f1"
              strokeWidth={2.5}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InventoryTrends;