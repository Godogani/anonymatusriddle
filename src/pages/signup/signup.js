import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";

export const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [confirmRegisterEmail, setConfirmRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert("Cadastro efetivado com sucesso");
    } catch (err) {
      alert("Cadastro não efetuado")
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
    <div class="container">
      <div class="main-logo">
        Anonymatus
        <i class="fa-solid fa-user-secret"></i>
      </div>
      <section>Cadastro</section>
      <div class="container-signup">
        <div className="form">
          <div class="user-input">
            {/*<label class="signup-identifier">Nickname</label>
            <br />
            <input type="text" name="username" id="username" required />
            <br />*/}
            <label class="signup-identifier">E-mail</label>
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
            <label class="signup-identifier">Confirmar e-mail</label>
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
            <label class="signup-identifier">Senha</label>
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
            <label class="signup-identifier">Confirmar senha</label>
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
          <button class="submit-btn" id="submit-btn" onClick={confirmRegister}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
