import React from 'react';
import "./Register.css"
import TopBar from '../Components/TopBar'

function Register() {
    
    return (
        <>
            <TopBar Child="Registrar"/>
            <div className="imagepicker">
                <input type="file" id="Fimage" accept='image/*'></input>
            </div>
            <div className="list" >
                <input className="reginp" type="text" placeholder='Nomemodelo'></input>
                <input className="reginp" type="text" placeholder='Lucro:30%'></input>
                <input className="reginp" type="text" placeholder='Escala:100%'></input>
                <input className="reginp" type="text" placeholder='Tamanho:15cm'></input>
                <input className="reginp" type="text" placeholder='Primer:2X'></input>
                <input className="reginp" type="text" placeholder='Pintura:R$50,00'></input>
            </div>
        </>
    )
}

export default Register;