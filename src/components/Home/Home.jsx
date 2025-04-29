import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button
          className="create-account-btn"
          onClick={() => navigate("/auth/signup")}
        >
          Create Account
        </button>
        <button className="login-btn" onClick={() => navigate("/auth/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
