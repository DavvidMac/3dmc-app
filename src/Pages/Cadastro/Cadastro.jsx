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
  //lista de objetos[{tempo,peso},{tempo,peso}]
  const [lista, setLista] = React.useState(object);
  //input tempo e peso
  const [tempo, setTempo] = React.useState("");
  const [peso, setPeso] = React.useState("");
  //Form cadastro
  const [nome, setNome] = React.useState("");
  let url;
  //const [url, setUrl] = React.useState();
  const [photo, setPhoto] = React.useState(null);
  const [tamanho, setTamanho] = React.useState("");
  const [escala, setEscala] = React.useState("");
  const [pintura, setPintura] = React.useState("");
  const [primers, setPrimers] = React.useState("");
  //soma material e tempo
  const [summ, setSumm] = React.useState(0);
  const [sumt, setSumT] = React.useState("00:00");

  const objectLibrary = collection(db, "Biblioteca");

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
    alert("Objetos cadastrados com sucesso")
  }
 
  return (
    <>
      <div className="CadastroPage">
        <div className="CadastroForm">
          <h3 className="CadastroTitulo">Produto</h3>
          <label>
            Name:
            <input
              className="CadastroInputProduto"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            ></input>
          </label>
          <label>
            Photo:
            <input
              className="CadastroInputProduto"
              type="file"
              placeholder="Photo"
              onChange={(e) => setPhoto(e.target.files[0])}
            ></input>
          </label>
          <label>
            Size:
            <input
              className="CadastroInputProduto"
              type="text"
              placeholder="Tamanho"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
            ></input>
          </label>
          <label>
            Scale:
            <input
              className="CadastroInputProduto"
              type="text"
              placeholder="Escala"
              value={escala}
              onChange={(e) => setEscala(e.target.value)}
            ></input>
          </label>
          <label>
            Pintura:
            <input
              className="CadastroInputProduto"
              type="text"
              placeholder="Pintura"
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
        </div>
        <div className="CalcContainerCenter">
          <div>
            <h2 className="CalcTitulo">Lista Partes</h2>
            <input
              className="CadastroInputPartes"
              type="text"
              placeholder="Tempo"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
            ></input>
            <input
              className="CadastroInputPartes"
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
              Salvar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastrar;
