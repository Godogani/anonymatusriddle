import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/login") {
      setActiveTab("Login");
    } else if (location.pathname === "/signup") {
      setActiveTab("Signup");
    } else if (location.pathname === "/leaderboard") {
      setActiveTab("Leaderboard");
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Anonymatus
        <i className="fa-solid fa-user-secret"></i>
      </div>
      <a href="#" className="toggle-btn">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">
              <p
                className={`${activeTab === "Home" ? "active" : ""}`}
                onClick={() => setActiveTab("Home")}
              >
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <p
                className={`${activeTab === "Login" ? "active" : ""}`}
                onClick={() => setActiveTab("Login")}
              >
                Login
              </p>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <p
                className={`${activeTab === "Signup" ? "active" : ""}`}
                onClick={() => setActiveTab("Signup")}
              >
                Signup
              </p>
            </Link>
          </li>
          <li>
            <Link to="/leaderboard">
              <p
                className={`${activeTab === "Leaderboard" ? "active" : ""}`}
                onClick={() => setActiveTab("Leaderboard")}
              >
                Leaderboard
              </p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p
                className={`${activeTab === "Contact" ? "active" : ""}`}
                onClick={() => setActiveTab("Contact")}
              >
                Contato
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
