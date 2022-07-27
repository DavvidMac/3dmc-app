import React from 'react';
import "./Info.css"
import NavBar from "../Components/NavBar"

function Info() {
    return (
        <>
            <NavBar />
            <div className="ss">
                <h1>Informações</h1>
                <input className="inpInfo" type="text" placeholder="Material"></input>
                <input className="inpInfo" type="text" placeholder="Invest"></input>
                <input className="inpInfo" type="text" placeholder="Consumo"></input>
                <input className="inpInfo" type="text" placeholder="Custo Energia"></input>
                <input className="inpInfo" type="text" placeholder="Salario"></input>
                <input className="inpInfo" type="text" placeholder="Despesas"></input>
                <input className="inpInfo" type="text" placeholder="Depreciação"></input>
                <input className="inpInfo" type="text" placeholder="Dias"></input>
                <input className="inpInfo" type="text" placeholder="Horas "></input>
                <input className="inpInfo" type="text" placeholder="Primer"></input>
            </div>
        </>
    );
}

export default Info;
