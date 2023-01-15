import React from "react";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utils/firebase";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/produtos", { replace: true });
        })
        .catch(() => {
          console.log("erro ao fazer cadastro");
        });
    } else {
      alert("preencha todos os campos");
    }
  }

  return (
    <div className="home-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type={"text"}
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={"password"}
          placeholder="Digite seu email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
