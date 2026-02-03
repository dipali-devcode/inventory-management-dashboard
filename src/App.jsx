import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/layout/Sidebar";
import LoadingScreen from "./components/common/LoadingScreen";
import ErrorScreen from "./components/common/ErrorScreen";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { fetchProducts } from "./store/productsSlice";

function App() {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const error = useSelector((state) => state.ui.error);
  const dispatch = useDispatch();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <ErrorScreen
        message="Unable to load inventory data."
        onRetry={() => dispatch(fetchProducts())}
      />
    );
  }

  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
