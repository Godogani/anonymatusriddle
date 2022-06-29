import React from "react";
import {Link} from "react-router-dom";
import './home.css'


export const Home = () => {
  return (
    <div className="container">
      <span className="main-logo">
        Anonymatus
        <i className="fa-solid fa-user-secret"></i>
      </span>
      <Link to="/login" className="btn">
        <p
        >
          Login
        </p>
      </Link>
      <Link to="/signup" className="btn">
        <p
        >
          Signup
        </p>
      </Link>
    </div>
  );
};
