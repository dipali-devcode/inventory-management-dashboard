import { FiArchive } from "react-icons/fi";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-brand">
          <FiArchive />
          <span>InventoryPro</span>
        </div>

        <div className="loading-spinner" />

        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
