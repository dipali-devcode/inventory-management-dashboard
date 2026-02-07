import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/productsSlice";
import { setSearchQuery } from "../store/searchSlice";
import { selectFilteredProducts } from "../store/selectors";

import OverviewMetrics from "../components/inventory/OverviewMetrics";
import InventoryTable from "../components/inventory/InventoryTable";
import ReorderRecommendations from "../components/inventory/ReorderRecommendations";
import SlowMovingInventory from "../components/inventory/SlowMovingInventory";
import SupplierPerformance from "../components/inventory/SupplierPerformance";

const Inventory = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.searchQuery);
  const allProducts = useSelector((state) => state.products.items);
  const products = useSelector(selectFilteredProducts);

  useEffect(() => {
    if (!allProducts || allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts]);

  return (
    <div>
      <OverviewMetrics products={products} />

      <div className="inventory-card">
        <div className="inventory-header main">
          <h3>Current Inventory</h3>

          <input
            type="text"
            placeholder="Search products or categories..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>

        <InventoryTable products={products} />
      </div>

      <div className="dashboard-grid">
        <ReorderRecommendations products={products} />
        <SlowMovingInventory products={products} />
      </div>

      <SupplierPerformance products={products} />
    </div>
  );
};

export default Inventory;
