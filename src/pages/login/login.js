import React, { useState } from "react";
import "./login.css";
import { auth } from "../../config/firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    try {
      const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="container">
      <div className="main-logo">
        Anonymatus <i className="fa-solid fa-user-secret"> </i>{" "}
      </div>{" "}
      <section> Log In </section>{" "}
      <div className="container-signup">
        <div className="form">
          <div className="user-input">
            <span className="signup-identifier"> E - mail </span> <br />
            <input
              type="email"
              name="user-email"
              id="user-email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <br />
            <span className="signup-identifier"> Senha </span> <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <br />
          </div>{" "}
          <button className="submit-btn" id="submit-btn" onClick={login}>
            Log In
          </button>
          <button onClick={logOut}>Sign Out</button>
        </div>{" "}
      </div>{" "}
    </div>
  );
};
