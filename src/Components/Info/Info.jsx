import React from "react";
import "./Info.css";
import { db } from "../../firebase";
import { updateDoc,doc } from "firebase/firestore";

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

  const send= async () =>{
    const infoDoc=doc(db,"Info",'jNVr2acKQhCmIsiDMDED')
    await updateDoc(infoDoc, {
      pMaterial,
      cEnergia,
      salario,
      despesas,
      primer,
      lucro,
    });
    alert("Information saved");
  }
  
  return (
    <>
      <div className="InfoContainer">
        <h3 className="InfoTitulo">Information</h3>
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
          Energy:
          <input
            className="InpInfo"
            type="text"
            value={cEnergia}
            onChange={(event) => setCEnergia(event.target.value)}
          ></input>
        </label>
        <label>
          Pay:
          <input
            className="InpInfo"
            type="text"
            value={salario}
            onChange={(event) => setSalario(event.target.value)}
          ></input>
        </label>
        <label>
          Expenses:
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
          Lucre %:
          <input
            className="InpInfo"
            type="text"
            value={lucro}
            onChange={(event) => setLucro(event.target.value)}
          ></input>
        </label>
        <button onClick={send} className="InfoButton">Send</button>
      </div>
    </>
  );
}

export default Info;
