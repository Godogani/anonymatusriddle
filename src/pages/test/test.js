import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase-config";
import { collection } from "firebase/firestore";

export const Test = () => {
  const [userNickname, setUserNickname] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [confirmRegisterEmail, setConfirmRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");
  const usersCollectionRef = collection(db, "users");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      alert("Cadastro não efetuado");
      console.log(err.message);
    }
  };
  const confirmRegister = async () => {
    if (
      registerEmail === confirmRegisterEmail &&
      registerPassword === confirmRegisterPassword
    ) {
      register();
    } else {
      alert("Suas credenciais não combinam");
    }
  };

  return (
    <div className="container">
      <div className="main-logo">
        Anonymatus
        <i className="fa-solid fa-user-secret"></i>
      </div>
      <section>Cadastro</section>
      <div className="container-signup">
        <div classNameName="form">
          <div className="user-input">
            <label className="signup-identifier">Nickname</label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              onChange={(event) => {
                setUserNickname(event.target.value);
              }}
              required
            />
            <br />
            <label className="signup-identifier">E-mail</label>
            <br />
            <input
              type="email"
              name="user-email"
              id="userEmail"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
              required
            />
            <br />
            <label className="signup-identifier">Confirmar e-mail</label>
            <br />
            <input
              type="email"
              name="email-confirm"
              id="email-confirm"
              onChange={(event) => {
                setConfirmRegisterEmail(event.target.value);
              }}
              required
            />
            <br />
            <label className="signup-identifier">Senha</label>
            <br />
            <input
              type="password"
              name="password"
              id="userPassword"
              required
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <br />
            <label className="signup-identifier">Confirmar senha</label>
            <br />
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              onChange={(event) => {
                setConfirmRegisterPassword(event.target.value);
              }}
              required
            />
            <br />
          </div>
          <button
            className="submit-btn"
            id="submit-btn"
            onClick={confirmRegister}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
