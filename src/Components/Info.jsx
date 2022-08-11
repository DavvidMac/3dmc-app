import React from 'react';
import "./Info.css"
let material;
let invest;
let cEnergia;
let salario;
let despesas;
let primer;
function Info() {
    return (
        <>
            <div className="infocontainer">
                <h1 className="titulo">Informações</h1>
                <input className="inpInfo" type="text" placeholder="Material" value={material}></input>
                <input className="inpInfo" type="text" placeholder="Invest" value={invest} ></input>
                <input className="inpInfo" type="text" placeholder="Custo Energia" value={cEnergia}></input>
                <input className="inpInfo" type="text" placeholder="Salario" value={salario}></input>
                <input className="inpInfo" type="text" placeholder="Despesas" value={despesas}></input>
                <input className="inpInfo" type="text" placeholder="Primer" value={primer}></input>
            </div>
        </>
    );
}

export default Info;
