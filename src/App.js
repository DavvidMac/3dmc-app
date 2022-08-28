import React from "react";
import "./App.css";
import Produtos from "./Pages/Produtos";
import NavBar from "./Components/NavBar";
import Info from "./Components/Info";
import Cadastro from "./Pages/Cadastro";
function App() {
  const [pesquisa, setPesquisa] = React.useState(""); //for navbar search

  //info part
  const [pMaterial, setPMaterial] = React.useState(120.00);
  const [cEnergia, setCEnergia] = React.useState(0.94);
  const [salario, setSalario] = React.useState(1100);
  const [despesas, setDespesas] = React.useState(80);
  const [primer, setPrimer] = React.useState(17.00);
  const [lucro, setLucro] = React.useState(30);

  //   <Info />
  //<Produtos pesquisa={pesquisa} />
  return (
    <div className="App">
      <NavBar pesquisa={pesquisa} setPesquisa={setPesquisa} />
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
        <Produtos
          pesquisa={pesquisa}
          pMaterial={pMaterial}
          cEnergia={cEnergia}
          salario={salario}
          despesas={despesas}
          primer={primer}
          lucro={lucro}
        />
      </div>
    </div>
  );
}
export default App;
