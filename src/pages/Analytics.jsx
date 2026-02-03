import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

import AnalyticsKPIs from "../components/analytics/AnalyticsKPIs";
import CategoryAnalytics from "../components/analytics/CategoryAnalytics";
import InventoryTrends from "../components/analytics/InventoryTrends";
import StockHealthBreakdown from "../components/analytics/StockHealthBreakdown";

const Analytics = () => {
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
    <div className="analytics-page">
      <AnalyticsKPIs products={items} />

      <div className="analytics-grid">
        <InventoryTrends products={items} />
        <StockHealthBreakdown products={items} />
        <CategoryAnalytics products={items} />
      </div>
    </div>
  );
};

export default Analytics;
