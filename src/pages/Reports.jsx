import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

import ReportsSummaryCards from "../components/reports/ReportsSummaryCards";
import LowStockReportTable from "../components/reports/LowStockReportTable";
import CategorySummaryTable from "../components/reports/CategorySummaryTable";

const Reports = () => {
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
    <div>
      <ReportsSummaryCards products={items} />
      <CategorySummaryTable products={items} />
      <LowStockReportTable products={items} />
    </div>
  );
};

export default Reports;
