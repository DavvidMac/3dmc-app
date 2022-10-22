import React from "react";
import "./Info.css";
import { FbContext } from "../../Utils/Fb";
import { db } from "../../Utils/firebase";
import { updateDoc, setDoc, doc } from "firebase/firestore";
import Calcular from "../../Utils/CalculoObjeto";

var isPrice;
function Info() {
  const information=React.useContext(FbContext)
  const send = async () => {
    const infoDoc = doc(db, "Info", "jNVr2acKQhCmIsiDMDED");
    await updateDoc(infoDoc,{ 
      pMaterial:information.pMaterial,
      cEnergia:information.cEnergia,
      salario:information.salario,
      despesas:information.despesas,
      primer:information.primer,
      lucro:information.lucro,
  });
    alert("Information saved");
    var listaNova = information.listaProdutos.map((produto) => ({
      ...produto,
      preco: Calcular({
        impressao: produto.tempo,
        pla: produto.peso,
        lucro:information.lucro,
        pMaterial:information.pMaterial,
        cEnergia:information.cEnergia,
        salario:information.salario,
        despesas:information.despesas,
        primer:information.primer,
        Tprimers: produto.primers,
        pintura: produto.pintura,
        isPrice: (isPrice = true),
      }),
      money: Calcular({
        impressao: produto.tempo,
        pla: produto.peso,
        lucro:information.lucro,
        pMaterial:information.pMaterial,
        cEnergia:information.cEnergia,
        salario:information.salario,
        despesas:information.despesas,
        primer:information.primer,
        Tprimers: produto.primers,
        pintura: produto.pintura,
        isPrice: (isPrice = false),
      }),
    }));
    listaNova.map((item) => updateProducts(item));
  };
  const updateProducts = async (item) => {
    console.log(item);
    const userDoc = doc(db, "Biblioteca", item.id);
    await updateDoc(userDoc, { money: item.money, preco: item.preco });
  };
  return (
    <>
      <div className="InfoContainer">
        <h3 className="InfoTitulo">Information</h3>
        <label>
          Material Price R$:
          <input
            className="InpInfo"
            type="text"
            value={information.pMaterial}
            onChange={(event) => information.setPMaterial(event.target.value)}
          ></input>
        </label>
        <label>
          Energy Kw:
          <input
            className="InpInfo"
            type="text"
            value={information.cEnergia}
            onChange={(event) => information.setCEnergia(event.target.value)}
          ></input>
        </label>
        <label>
          Pay R$:
          <input
            className="InpInfo"
            type="text"
            value={information.salario}
            onChange={(event) => information.setSalario(event.target.value)}
          ></input>
        </label>
        <label>
          Expenses R$:
          <input
            className="InpInfo"
            type="text"
            value={information.despesas}
            onChange={(event) => information.setDespesas(event.target.value)}
          ></input>
        </label>
        <label>
          Primer Price:
          <input
            className="InpInfo"
            type="text"
            value={information.primer}
            onChange={(event) => information.setPrimer(event.target.value)}
          ></input>
        </label>
        <label>
          Lucre %:
          <input
            className="InpInfo"
            type="text"
            value={information.lucro}
            onChange={(event) => information.setLucro(event.target.value)}
          ></input>
        </label>
        <button onClick={send} className="InfoButton">
          Send
        </button>
      </div>
    </>
  );
}

export default Info;
