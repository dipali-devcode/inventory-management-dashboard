import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import DashboardMetrics from "../components/dashboard/DashboardMetrics";
import LowStockAlerts from "../components/dashboard/LowStockAlerts";
import CategorySummary from "../components/dashboard/CategorySummary";
import RecentProducts from "../components/dashboard/RecentProducts";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <p>Loading inventory...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="dashboard-page">
      <DashboardMetrics products={items} />

      <div className="dashboard-middle">
        <LowStockAlerts products={items} />
        <CategorySummary products={items} />
      </div>

      <RecentProducts products={items} />
    </div>
  );
};

export default Dashboard;
