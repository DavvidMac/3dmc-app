import React from 'react';
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd,faList,faInfo } from "@fortawesome/free-solid-svg-icons"

function Home() {
    return (
        <>
            <div className="tollbar">
                <div className="containerhome">
                    <img src={require('../Images/Logo.png')} className="logoloja" alt='Logo' />
                    < p className="lojaname">LOJA <strong>3DMC</strong></p>
                </div>
                <input className="searchbar" type="text" placeholder="Pesquisar"></input>
                <div className="containerbutton">
                <FontAwesomeIcon className="icone" icon={faAdd} alt='icon' ></FontAwesomeIcon>
                <FontAwesomeIcon className="icone" icon={faList} alt='icon' ></FontAwesomeIcon>
                </div>
            </div>


        </>
    )
}

export default Home;