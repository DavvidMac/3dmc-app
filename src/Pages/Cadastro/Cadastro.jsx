import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import "./Cadastro.css";
import LineCalc from "../../Components/LineCalc/LineCalc";
import { somaHora } from "../../Utils/tempoUtils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../../firebase";
import { v4 } from "uuid";
let object = []; //lista vazia

function Cadastrar({ listaProdutos, setListaProdutos }) {
  const [imageUrls, setImageUrls] = React.useState([]);
  const [lista, setLista] = React.useState(object); //lista de objetos[{tempo,peso},{tempo,peso}]
  //input tempo e peso
  const [tempo, setTempo] = React.useState("");
  const [peso, setPeso] = React.useState("");
  //Form cadastro
  const [nome, setNome] = React.useState("");
  let url; //variavel recebe os url
  const [photo, setPhoto] = React.useState(null);
  const [tamanho, setTamanho] = React.useState("");
  const [escala, setEscala] = React.useState("");
  const [pintura, setPintura] = React.useState("");
  const [primers, setPrimers] = React.useState("");
  //soma material e tempo
  const [summ, setSumm] = React.useState(0);
  const [sumt, setSumT] = React.useState("00:00");
  const objectLibrary = collection(db, "Biblioteca"); //firebase

  useEffect(() => {
    if (lista.length < 1) return;
    let soma = lista
      .map((itemm) => itemm.peso)
      .reduce((prev, curr) => prev + curr, 0);
    let horas = lista.map((itemm) => itemm.tempo);
    setSumT(somaHora(horas));
    setSumm(soma);
  }, [lista]);

  const handleAdd = () => {
    setLista([...lista, { tempo: tempo, peso: parseFloat(peso) }]);
    setTempo("");
    setPeso("");
  };
  async function adicionar() {
    if (photo == null) return;
    url = `images/${photo.name + v4()}`;
    const imageRef = ref(storage, url); //generate a unic name for images
    uploadBytes(imageRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    await addDoc(objectLibrary, {
      nome: nome,
      tamanho: tamanho,
      escala: escala,
      pintura: pintura,
      primers: primers,
      url: url,
      peso: summ,
      tempo: sumt,
    });
    setListaProdutos([
      ...listaProdutos,
      { nome, url, tempo: sumt, peso: summ, tamanho, escala, pintura, primers },
    ]);
    alert("Objetos cadastrados com sucesso");
  }

  return (
    <>
      <div className="CadastroPage">
        <div>
          <div className="CadastroForm">
            <h3 className="CadastroTitulo">Product</h3>
            <label>
              Name:
              <input
                className="CadastroInputProduto"
                required="required"
                type="text"
                placeholder="Name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              ></input>
            </label>
            <label>
              Size:
              <input
                className="CadastroInputProduto"
                type="text"
                placeholder="Size"
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
              ></input>
            </label>
            <label>
              Scale:
              <input
                className="CadastroInputProduto"
                type="text"
                placeholder="Scale"
                value={escala}
                onChange={(e) => setEscala(e.target.value)}
              ></input>
            </label>
            <label>
              Paint:
              <input
                className="CadastroInputProduto"
                type="text"
                placeholder="Paint"
                value={pintura}
                onChange={(e) => setPintura(e.target.value)}
              ></input>
            </label>
            <label>
              Primers:
              <input
                className="CadastroInputProduto"
                type="text"
                placeholder="Primers"
                value={primers}
                onChange={(e) => setPrimers(e.target.value)}
              ></input>
            </label>
            <div className="cadastroCentIn">
           <label className="labelInputimg">
              Picture
              <input
                name="Picture"
                className="CadastroInputFile"
                type="file"
                placeholder="Photo"
                onChange={(e) => setPhoto(e.target.files[0])}
              ></input>
            </label>
           </div>
          </div>
        </div>
        <div className="CalcContainerCenter">
          <div>
            <h2 className="CalcTitulo">Objects</h2>
            <input
              className="CadastroInputPartes"
              type="text"
              placeholder="Time"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
            ></input>
            <input
              className="CadastroInputPartes"
              type="number"
              step="0.01"
              placeholder="Weight"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            ></input>
            <FontAwesomeIcon
              className="icone"
              icon={faAdd}
              alt="icon"
              onClick={handleAdd}
            ></FontAwesomeIcon>

            {lista.map((itemm, index) => (
              <LineCalc
                key={index}
                pl_time={itemm.tempo}
                pl_mat={itemm.peso}
                id={index}
                tipo=""
                lista={lista}
                setLista={setLista}
              />
            ))}
            <LineCalc pl_time={sumt} pl_mat={summ} tipo="soma" />
            <button className="CadastroButton" onClick={adicionar}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastrar;
