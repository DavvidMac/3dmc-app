import React from 'react';
import "./Info.css"

function Info() {
    return (
        <>
            <div className="infocontainer">
                <h1 className="titulo">Informações</h1>
                <input className="inpInfo" type="text" placeholder="Material"></input>
                <input className="inpInfo" type="text" placeholder="Invest"></input>
                <input className="inpInfo" type="text" placeholder="Custo Energia"></input>
                <input className="inpInfo" type="text" placeholder="Salario"></input>
                <input className="inpInfo" type="text" placeholder="Despesas"></input>
                <input className="inpInfo" type="text" placeholder="Primer"></input>
            </div>
        </>
    );
}

export default Info;
