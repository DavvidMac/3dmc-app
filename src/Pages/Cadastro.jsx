import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "./Cadastro.css";
import LineCalc from "../Components/LineCalc";
import { somaHora } from "../utils/tempoUtils";
let object = []; //lista vazia

function Cadastrar({listaProdutos,setListaProdutos}) {
  //lista de objetos[{tempo,peso},{tempo,peso}]
  const [lista, setLista] = React.useState(object);
  //input tempo e peso
  const [tempo, setTempo] = React.useState("");
  const [peso, setPeso] = React.useState("");
  //Form cadastro 
  const [nome, setNome] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [tamanho, setTamanho] = React.useState("");
  const [escala, setEscala] = React.useState("");
  const [pintura, setPintura] = React.useState("");
  const [primers, setPrimers] = React.useState("");
  //soma material e tempo
  const [summ, setSumm] = React.useState(0);
  const [sumt, setSumT] = React.useState("00:00");

  useEffect(() => {
    if (lista.length < 1) return;
    let soma = lista
      .map((itemm) => itemm.peso)
      .reduce((prev, curr) => prev + curr, 0);
    //pega apenas as horas do objeto, criando um novo array de horas
    let horas = lista.map((itemm) => itemm.tempo);
    //calcula as horas e seta no estado
    setSumT(somaHora(horas));
    setSumm(soma);
  }, [lista]);

  const handleAdd = () => {
    setLista([...lista, { tempo: tempo, peso: parseFloat(peso) }]);
    //console.log([...lista, { tempo, peso }])
    setTempo("");
    setPeso("");
  };

  function adicionar(){
    setListaProdutos([...listaProdutos,{nome,url,sumt,summ,tamanho,escala,pintura,primers}]);
  }
  return (
    <>
      <div className="CalcContainerCenter">
        <div className="CalcContainer">
          <h1 className="CalcTitulo">Cadastrar</h1>
          <div className="CadastroForm">
            <label>Nome Produto:
              <input
                className="CalcInpInfo"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              ></input>
            </label>
            <label>Url Photo:
              <input
                className="CalcInpInfo"
                type="text"
                placeholder="Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
            </label>
            <label>Tamanho:
              <input
                className="CalcInpInfo"
                type="text"
                placeholder="Tamanho"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
              ></input>
            </label>
            <label>Escala:
              <input
                className="CalcInpInfo"
                type="text"
                placeholder="Escala"
                value={escala}
                onChange={(e) => setEscala(e.target.value)}
              ></input>
            </label>
            <label>Pintura:
              <input
                className="CalcInpInfo"
                type="text"
                placeholder="Pintura"
                value={pintura}
                onChange={(e) => setPintura(e.target.value)}
              ></input>
            </label>
            <label>Primers:
              <input
                className="CalcInpInfo"
                type="text"
                placeholder="Primers"
                value={primers}
                onChange={(e) => setPrimers(e.target.value)}
              ></input>
            </label>
          </div>
          {lista.map((itemm, index) => (
            <LineCalc
              key={index}
              pl_time={itemm.tempo}
              pl_mat={itemm.peso}
              tipo=""
            />
          ))}
          <LineCalc pl_time={sumt} pl_mat={summ} tipo="soma" />
          <input
            className="CalcInpInfo"
            type="text"
            placeholder="Tempo"
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
          ></input>
          <input
            className="CalcInpInfo"
            type="number"
            step="0.01"
            placeholder="Peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          ></input>
          <FontAwesomeIcon
            className="icone"
            icon={faAdd}
            alt="icon"
            onClick={handleAdd}
          ></FontAwesomeIcon>
        </div>
      </div>
      <button onClick={adicionar}>Salvar</button>
    </>
  );
}
export default Cadastrar;
