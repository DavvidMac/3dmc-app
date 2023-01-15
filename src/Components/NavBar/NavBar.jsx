import React from "react";
import "./NavBar.css";
import { auth } from '../../Utils/firebase'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar({ pesquisa, setPesquisa }) {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("Saiu com sucesso");
      // handle the successful sign out by redirecting to login page or displaying a message
    } catch (error) {
      console.error("Error signing out user: ", error);
      // handle the error by displaying an error message
    }
  }
  return (
    <>
      <div className="NavBarTollbar">
        <div className="NavBarContainer">
          <img
            src={require("./Images/Logo.png")}
            className="NavBarLogo"
            alt="Logo"
          />
          <p className="NavBarLojaName">
           <Link className="NavBara" to="/"><strong>TOYACTION</strong></Link>
          </p>
        </div>
        <input
          className="NavBarSearchBar"
          type="text"
          placeholder="Pesquisar"
          value={pesquisa}
          onChange={(event) => setPesquisa(event.target.value)}
        ></input>
        <div className="NavBarContainerButton">
          <Link className="NavBara" to="/Cadastro">Add</Link>
          <Link className="NavBara" to="/Produtos">Toys</Link>
          <Link className="NavBara" to="/Info">Tools</Link>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
