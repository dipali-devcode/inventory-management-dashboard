import { FiCloudOff } from "react-icons/fi";
import "./ErrorScreen.css";

const ErrorScreen = ({ message, onRetry }) => {
  return (
    <div className="error-screen">
      <div className="error-content">
        <FiCloudOff className="error-icon" />

        <h3>Something went wrong</h3>

        <p>
          {message ||
            "We couldn’t retrieve the inventory data from the server. This might be due to a network issue or a temporary service interruption. Please check your connection and try again."}
        </p>

        {onRetry && (
          <button className="retry-btn" onClick={onRetry}>
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorScreen;
