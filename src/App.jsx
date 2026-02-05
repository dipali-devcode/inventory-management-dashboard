import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import LoadingScreen from "./components/common/LoadingScreen";
import ErrorScreen from "./components/common/ErrorScreen";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";

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
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
