import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar({ pesquisa, setPesquisa }) {
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
            LOJA <Link className="NavBara" to="/"><strong>3DMC</strong></Link>
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
        </div>
      </div>
    </>
  );
}

export default NavBar;
