import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice"; 
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      setMessage("Login successful!");
      console.log("Token:", response.data.token); // Handle token if needed

      // Navigate to /form after successful login
      navigate("/form");
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/signup", {
        email,
        password,
      });
      setMessage("Registration successful! You can now log in.");
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
      setIsLogin(true); // Switch back to login view
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={isLogin ? handleLogin : handleRegister}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="toggle-text">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="toggle-button"
            >
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="toggle-button"
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default Login;