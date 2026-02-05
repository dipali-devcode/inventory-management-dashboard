import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FiPackage } from "react-icons/fi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.ui.isLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError(null);

    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate("/");
    } catch (error) {
      setAuthError(error);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        {/* Logo */}
        <div className="login-logo">
          <span className="logo-icon"><FiPackage /></span>
          <span className="logo-text">InventoryPro</span>
        </div>

        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">
          Sign in to manage your inventory efficiently.
        </p>

        <input
          className="login-input"
          type="email"
          placeholder="john.doe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="login-input"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {authError && (
          <p className="login-error">
            {authError}
          </p>
        )}

        <button className="login-button" type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
