import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faPhotoFilm,
  faClock,
  faBalanceScaleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Cadastro.css";
import LineCalc from "../../Components/LineCalc/LineCalc";
import { somaHora } from "../../Utils/tempoUtils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../../Utils/firebase";
import { v4 } from "uuid";
import Calcular from "../../Utils/CalculoObjeto";
let object = []; //lista vazia

function Cadastrar({
  listaProdutos,
  setListaProdutos,
  pMaterialPla,
  pMaterialRes,
  cEnergia,
  salario,
  despesas,
  primer,
  lucro,

}) {
  const [imageUrls, setImageUrls] = React.useState([]);
  const [lista, setLista] = React.useState(object); //lista de objetos[{tempo,peso},{tempo,peso}]
  //input tempo e peso
  const [tempo, setTempo] = React.useState("");
  const [peso, setPeso] = React.useState("");
  //Form cadastro
  const [tmaterial, setTmaterial] = React.useState(true);
  const [idProduto, setIdProduto] = React.useState("");
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
  var precoFinal;
  var money;

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
    precoFinal = Calcular({
      impressao: sumt,
      pla: summ,
      material: tmaterial?pMaterialRes:pMaterialPla,
      custoenergia: cEnergia,
      salario: salario,
      despesas: despesas,
      primer: primer,
      Tprimers: primers,
      pintura: pintura,
      isPrice: true,
    });
    money = Calcular({
      impressao: sumt,
      pla: summ,
      material: tmaterial?pMaterialRes:pMaterialPla,
      custoenergia: cEnergia,
      salario: salario,
      despesas: despesas,
      primer: primer,
      Tprimers: primers,
      pintura: pintura,
      isPrice: false,
    });
    if (photo == null) return;
    url = `images/${photo.name + v4()}`;
    const imageRef = ref(storage, url); //generate a unic name for images
    uploadBytes(imageRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    await addDoc(objectLibrary, {
      idProduto: idProduto,
      tmaterial:tmaterial,
      nome: nome,
      tamanho: tamanho,
      escala: escala,
      pintura: pintura,
      primers: primers,
      url: url,
      peso: summ,
      tempo: sumt,
      preco: precoFinal,
      money: money,
    });
    setListaProdutos([
      ...listaProdutos,
      { nome, url, tempo: sumt, peso: summ, tamanho, escala, pintura, primers },
    ]);
    alert(`Objeto ${nome} cadastrado com sucesso`);
    setPhoto("");
    setIdProduto("");
    setNome("");
    setTamanho("");
    setEscala("");
    setPintura("");
    setPrimers("");
    setLista([])
    setSumT("00:00")
    setSumm(0)
  }

  return (
    <>
      <h2 className="CadastroTitulo">Add</h2>
      <div className="CadastroPage">
        <div>
          <div className="CadastroForm">
            <label className="labelInputimg">
              {photo ? (
                <img alt="Produto"
                  className="CadastroImgPreview"
                  src={URL.createObjectURL(photo)}
                />
              ) : (
                <FontAwesomeIcon
                  className="CadastroImgPreview"
                  icon={faPhotoFilm}
                  alt="icon"
                ></FontAwesomeIcon>
              )}
              <input
                name="Picture"
                className="CadastroInputFile"
                type="file"
                placeholder="Photo"
                onChange={(e) => setPhoto(e.target.files[0])}
              ></input>
            </label>
            <label>
              Id:
              <input
                className="CadastroInputProduto"
                required="required"
                type="text"
                placeholder="Id Product"
                value={idProduto}
                onChange={(e) => setIdProduto(e.target.value)}
              ></input>
            </label>
            <label>
              Resina?
              <input
                className="CadastroInputProduto"
                type="checkbox"
                checked={tmaterial}
                onChange={(e) => setTmaterial(e.target.checked)}
              ></input>
            </label>
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
            <div className="CadastroCentIn"></div>
          </div>
        </div>
        <div className="CadastroCalcContainerCenter">
          <div>
            <div className="CadastroHeaderList">
              <label className="CadastroHeaderLabel">
                <FontAwesomeIcon
                  className="icone"
                  icon={faClock}
                  alt="icon"
                ></FontAwesomeIcon>
                <input
                  className="CadastroInputPartes"
                  type="text"
                  placeholder="Time"
                  value={tempo}
                  onChange={(e) => setTempo(e.target.value)}
                ></input>
              </label>
              <label className="CadastroHeaderLabel">
                <FontAwesomeIcon
                  className="icone"
                  icon={faBalanceScaleLeft}
                  alt="icon"
                ></FontAwesomeIcon>
                <input
                  className="CadastroInputPartes"
                  type="number"
                  step="0.01"
                  placeholder="Weight"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                ></input>
              </label>
              <FontAwesomeIcon
                className="icone"
                icon={faAdd}
                alt="icon"
                onClick={handleAdd}
              ></FontAwesomeIcon>
            </div>
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
          </div>
          <button className="CadastroButton" onClick={adicionar}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
export default Cadastrar;
