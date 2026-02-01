import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import OverviewMetrics from "../components/inventory/OverviewMetrics";
import InventoryTable from "../components/inventory/InventoryTable";
import ReorderRecommendations from "../components/inventory/ReorderRecommendations";
import SlowMovingInventory from "../components/inventory/SlowMovingInventory";
import SupplierPerformance from "../components/inventory/SupplierPerformance";

const Inventory = () => {
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
    <div>
      <OverviewMetrics products={items} />
      <InventoryTable products={items} />
      <div className="dashboard-grid">
        <ReorderRecommendations products={items} />
        <SlowMovingInventory products={items} />
      </div>

      <SupplierPerformance products={items} />
    </div>
  );
};

export default Inventory;
