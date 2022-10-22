import React from "react";
import "./NavBar.css";
import { FbContext } from "../../Utils/Fb";
import { Link } from "react-router-dom";

function NavBar() {
  const information=React.useContext(FbContext)
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
          value={information.pesquisa}
          onChange={(event) => information.setPesquisa(event.target.value)}
        ></input>
        <div className="NavBarContainerButton">
          <Link className="NavBara" to="/Cadastro">Add</Link>
          <Link className="NavBara" to="/Export">Export</Link>
          <Link className="NavBara" to="/Info">Info</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
