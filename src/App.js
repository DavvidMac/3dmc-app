import React from "react";
import "./App.css";
import Produtos from "./Pages/Produtos/Produtos";
import NavBar from "./Components/NavBar/NavBar";
import Info from "./Components/Info/Info";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [listaProdutos, setListaProdutos] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState(""); //for navbar search
  const objectLibrary = collection(db, "Biblioteca");
  //info part
  const [pMaterial, setPMaterial] = React.useState(120.0);
  const [cEnergia, setCEnergia] = React.useState(0.94);
  const [salario, setSalario] = React.useState(1100);
  const [despesas, setDespesas] = React.useState(80);
  const [primer, setPrimer] = React.useState(17.0);
  const [lucro, setLucro] = React.useState(30);

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
    getPoducts();
  }, [objectLibrary]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar pesquisa={pesquisa} setPesquisa={setPesquisa} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="BodyPage">
              <Info
                pMaterial={pMaterial}
                setPMaterial={setPMaterial}
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
              />
              {
                <Produtos
                  listaProdutos={listaProdutos}
                  pesquisa={pesquisa}
                  pMaterial={pMaterial}
                  cEnergia={cEnergia}
                  salario={salario}
                  despesas={despesas}
                  primer={primer}
                  lucro={lucro}
                />
              }
            </div>
          }
        ></Route>
        <Route
          path="/Cadastro"
          element={
            <Cadastro
              listaProdutos={listaProdutos}
              setListaProdutos={setListaProdutos}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
