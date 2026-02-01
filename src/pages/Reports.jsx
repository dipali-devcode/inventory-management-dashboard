import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import ReportsSummaryCards from "../components/reports/ReportsSummaryCards";
import LowStockReportTable from "../components/reports/LowStockReportTable";
import CategorySummaryTable from "../components/reports/CategorySummaryTable";
import { useEffect } from "react";

const Reports = () => {
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
  return <div>
    <ReportsSummaryCards products={items}/>
    <CategorySummaryTable products={items}/>
    <LowStockReportTable products={items}/>
  </div>;
};

export default Reports;
