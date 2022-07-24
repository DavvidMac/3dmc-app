import React from 'react';
import "./Home.css"
function Home() {
    return (
        <>
            <img src={require('../Images/LOGO.png')} className="logoloja" />
            < p className="lojaname">3DMC LOJA</p>
            <div className="container">
                <a>Registrar</a>
                <a>Catálogo</a>
                <a>Informações</a>
            </div>
        </>
    )
}

export default Home;