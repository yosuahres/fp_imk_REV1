import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
          Register
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;