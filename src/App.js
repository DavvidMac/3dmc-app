import React from "react";
import "./App.css";
import Produtos from "./Pages/Produtos";
import NavBar from "./Components/NavBar";
import Info from "./Components/Info";
import Cadastro from "./Pages/Cadastro";
function App() {
  const [listaProdutos,setListaProdutos] =React.useState ([
    {
      nome: "Tony Stark",
      url: "https://images.tcdn.com.br/img/img_prod/621461/funko_pop_tony_stark_vingadores_ultimato_449_1431_1_20190621173202.jpg",
      tempo: "21:00",
      peso: 0.068,
      tamanho: "15cm",
      escala: "100%",
      pintura: 40.0,
      primers: 2,
    },
    {
      nome: "Wanda",
      url: "https://m.media-amazon.com/images/I/61QJ5yB6caL._AC_SL1300_.jpg",
      tempo: "00:40",
      peso: 0.03,
      tamanho: "15cm",
      escala: "100%",
      pintura: 50.0,
      primers: 2,
    },
    {
      nome: "Visão",
      url: "https://m.media-amazon.com/images/I/617kDClds4L._AC_SY550_.jpg",
      tempo: "00:40",
      peso: 0.03,
      tamanho: "15cm",
      escala: "100%",
      pintura: 50.0,
      primers: 2,
    },
    {
      nome: "WarMachine",
      url: "https://m.media-amazon.com/images/I/71v1ULEzReL._AC_SL1500_.jpg",
      tempo: "00:40",
      peso: 0.03,
      tamanho: "15cm",
      escala: "100%",
      pintura: 50.0,
      primers: 2,
    },
    {
      nome: "Loki",
      url: "https://m.media-amazon.com/images/I/51Pem4zbZeS._AC_SX425_.jpg",
      tempo: "00:40",
      peso: 0.03,
      tamanho: "15cm",
      escala: "100%",
      pintura: 50.0,
      primers: 2,
    },
    {
      nome: "Spider Man",
      url: "https://images.tcdn.com.br/img/img_prod/621461/funko_pop_homem_aranha_homem_aranha_de_volta_ao_lar_220_1281_1_20190529161237.jpg",
      tempo: "00:40",
      peso: 0.03,
      tamanho: "15cm",
      escala: "100%",
      pintura: 50.0,
      primers: 2,
    },
    {
      nome: "Doc Stranger Darkhold",
      url: "https://m.media-amazon.com/images/I/51MmktikCYL._AC_SX425_.jpg",
      tempo: "00:40",
      peso: 0.03,
      tamanho: "15cm",
      escala: "100%",
      pintura: 50.0,
      primers: 2,
    },
    {
      nome: "Hulk",
      url: "https://a-static.mlcdn.com.br/1500x1500/funko-pop-hulk-com-a-manopla-do-infinito-super-sized-pop-vingadores-ultimato/lojam2s/722925471/f3364b17d29d350a5cf549a8b82271b0.jpg",
      tempo: "00:40",
      peso: 0.03,
      tamanho: "15cm",
      escala: "100%",
      pintura: 50.0,
      primers: 2,
    },
  ]);
  const [pesquisa, setPesquisa] = React.useState(""); //for navbar search

  //info part
  const [pMaterial, setPMaterial] = React.useState(120.00);
  const [cEnergia, setCEnergia] = React.useState(0.94);
  const [salario, setSalario] = React.useState(1100);
  const [despesas, setDespesas] = React.useState(80);
  const [primer, setPrimer] = React.useState(17.00);
  const [lucro, setLucro] = React.useState(30);
  
  /**/
  /*<div className="BodyPage">
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
      listaProdutos={listaProdutos}
      pesquisa={pesquisa}
      pMaterial={pMaterial}
      cEnergia={cEnergia}
      salario={salario}
      despesas={despesas}
      primer={primer}
      lucro={lucro}
    />
  </div>*/
  return (
    <div className="App">
      <NavBar pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <Cadastro listaProdutos={listaProdutos} setListaProdutos={setListaProdutos}/>
      
    </div>
  );
}
export default App;
