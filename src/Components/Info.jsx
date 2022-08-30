import React from "react";
import "./Info.css";

function Info({
  pMaterial,
  setPMaterial,
  cEnergia,
  setCEnergia,
  salario,
  setSalario,
  despesas,
  setDespesas,
  primer,
  setPrimer,
  lucro,
  setLucro,
}) {
  return (
    <>
      <div className="InfoContainer">
        <h3 className="InfoTitulo">Informações</h3>
        <label>
          Material:
          <input
            className="InpInfo"
            type="text"
            value={pMaterial}
            onChange={(event) => setPMaterial(event.target.value)}
          ></input>
        </label>
        <label>
          Energia:
          <input
            className="InpInfo"
            type="text"
            value={cEnergia}
            onChange={(event) => setCEnergia(event.target.value)}
          ></input>
        </label>
        <label>
          Salario:
          <input
            className="InpInfo"
            type="text"
            value={salario}
            onChange={(event) => setSalario(event.target.value)}
          ></input>
        </label>
        <label>
          Despesas:
          <input
            className="InpInfo"
            type="text"
            value={despesas}
            onChange={(event) => setDespesas(event.target.value)}
          ></input>
        </label>
        <label>
          Primer:
          <input
            className="InpInfo"
            type="text"
            value={primer}
            onChange={(event) => setPrimer(event.target.value)}
          ></input>
        </label>
        <label>
          Lucro %:
          <input
            className="InpInfo"
            type="text"
            value={lucro}
            onChange={(event) => setLucro(event.target.value)}
          ></input>
        </label>
      </div>
    </>
  );
}

export default Info;
