import { useDispatch, useSelector } from "react-redux";
import AnalyticsKPIs from "../components/analytics/AnalyticsKPIs";
import CategoryAnalytics from "../components/analytics/CategoryAnalytics";
import InventoryTrends from "../components/analytics/InventoryTrends";
import StockHealthBreakdown from "../components/analytics/StockHealthBreakdown";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";

const Analytics = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading inventory...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="analytics-page">
      {/* KPIs */}
      <AnalyticsKPIs products={items} />

      {/* Top charts row */}
      <div className="analytics-top-row">
        <div className="analytics-trends">
          <InventoryTrends products={items} />
        </div>

        <div className="analytics-health">
          <StockHealthBreakdown products={items} />
        </div>
      </div>

      {/* Bottom full-width chart */}
      <CategoryAnalytics products={items} />
    </div>
  );
};

export default Analytics;
