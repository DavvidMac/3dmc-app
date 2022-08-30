import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faList, faInfo } from "@fortawesome/free-solid-svg-icons";

function NavBar({ pesquisa, setPesquisa }) {
  return (
    <>
      <div className="NavBarTollbar">
        <div className="NavBarContainer">
          <img
            src={require("../Images/Logo.png")}
            className="NavBarLogo"
            alt="Logo"
          />
          <p className="NavBarLojaName">
            LOJA <strong>3DMC</strong>
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
          <a href="/.Pages/galery">
            Cadastrar
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
