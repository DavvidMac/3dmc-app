import React from "react";
import "./Login.css";

import { auth } from "../../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/Produtos", { replace: true });
        })
        .catch(() => {
            alert("Falha ao logar");
        });
    } else {
      alert("preencha todos os campos");
    }
  }

  return (
    <div className="login-container">  
        <img
            src={require("../../Components/NavBar/Images/Logo.png")}
            className="logo-container"
            alt="Logo"
          />
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type={"text"}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={"password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
