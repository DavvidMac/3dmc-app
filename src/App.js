import React from "react";
import "./App.css";
import Produtos from "./Pages/Produtos/Produtos";
import NavBar from "./Components/NavBar/NavBar";
import Info from "./Pages/Info/Info";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { db, storage } from "./Utils/firebase";
import Edit from "./Pages/Edit/Edit";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Private from "./Pages/Private";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [listaProdutos, setListaProdutos] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState(""); //for navbar search
  const objectLibrary = collection(db, "Biblioteca");
  const infoLibrary = collection(db, "Info");
  //info part
  const [pMaterialPla, setPMaterialPla] = React.useState(120.0);
  const [pMaterialRes, setPMaterialRes] = React.useState(120.0);
  const [cEnergia, setCEnergia] = React.useState(0.94);
  const [salario, setSalario] = React.useState(1100);
  const [despesas, setDespesas] = React.useState(80);
  const [primer, setPrimer] = React.useState(17.0);
  const [lucro, setLucro] = React.useState(30);

  const [infos, setInfos] = React.useState(); //get from firebase

  const [imageUrls, setImageUrls] = React.useState([]);
  const imagesListRef = ref(storage, "images/");

  React.useEffect(() => {
    if (infos !== undefined) {
      setLucro(infos[0].lucro);
      setDespesas(infos[0].despesas);
      setPMaterialPla(infos[0].pMaterialPla);
      setPMaterialRes(infos[0].pMaterialRes);
      setPrimer(infos[0].primer);
      setSalario(infos[0].salario);
      setCEnergia(infos[0].cEnergia);
    }
  }, [infos]);

  React.useEffect(() => {
    const getPoducts = async () => {
      const data = await getDocs(objectLibrary);
      setListaProdutos(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    const getInfo = async () => {
      const data = await getDocs(infoLibrary);
      setInfos(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getPoducts();
    getInfo();
  }, []);
  React.useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar pesquisa={pesquisa} setPesquisa={setPesquisa} />
      </div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/Produtos"
          element={
            <div>
              <Private>
                <Produtos
                  listaProdutos={listaProdutos}
                  pesquisa={pesquisa}
                  pMaterialPla={pMaterialPla}
                  pMaterialRes={pMaterialRes}
                  cEnergia={cEnergia}
                  salario={salario}
                  despesas={despesas}
                  primer={primer}
                  lucro={lucro}
                  imageUrls={imageUrls}
                />{" "}
              </Private>
            </div>
          }
        ></Route>
        <Route
          path="/Cadastro"
          element={
            <Private>
            <Cadastro
              listaProdutos={listaProdutos}
              setListaProdutos={setListaProdutos}
              pMaterialPla={pMaterialPla}
              pMaterialRes={pMaterialRes}
              cEnergia={cEnergia}
              salario={salario}
              despesas={despesas}
              primer={primer}
              lucro={lucro}
            /></Private>
          }
        />
        <Route
          path="/Info"
          element={
            <Private>
            <Info
              pMaterialPla={pMaterialPla}
              pMaterialRes={pMaterialRes}
              setPMaterialPla={setPMaterialPla}
              setPMaterialRes={setPMaterialRes}
              cEnergia={cEnergia}
              setCEnergia={setCEnergia}
              salario={salario}
              setSalario={setSalario}
              despesas={despesas}
              setDespesas={setDespesas}
              primer={primer}
              setPrimer={setPrimer}
              lucro={lucro}
              setLucro={setLucro}
              listaProdutos={listaProdutos}
            /></Private>
          }
        ></Route>
        <Route path="/Register" element={<Private><Register /></Private>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
