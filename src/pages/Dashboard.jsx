import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

import DashboardMetrics from "../components/dashboard/DashboardMetrics";
import LowStockAlerts from "../components/dashboard/LowStockAlerts";
import CategorySummary from "../components/dashboard/CategorySummary";
import RecentProducts from "../components/dashboard/RecentProducts";

const Dashboard = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.products.items);

  // const isLoading = useSelector((state) => state.ui.isLoading);
  // const error = useSelector((state) => state.ui.error);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

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
