import React from "react";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utils/firebase";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    if (password === password2) {
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
    else{
      alert("Senhas não conferem");
    }
  }

  return (
    <div className="login-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <input
          type={"password"}
          placeholder="Repeat Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit">Sign</button>
      </form>
    </div>
  );
};

export default Register;
