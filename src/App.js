import React from "react";
import "./App.css";
import { Fb } from "./Utils/Fb";
import Produtos from "./Pages/Produtos/Produtos";
import NavBar from "./Components/NavBar/NavBar";
import Info from "./Pages/Info/Info";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Fb>
        <div className="App">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<div>{<Produtos />}</div>}></Route>
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Info" element={<Info />}></Route>
        </Routes>
      </Fb>
    </HashRouter>
  );
}

export default App;
