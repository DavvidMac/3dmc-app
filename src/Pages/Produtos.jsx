import React from "react";
import Calcular from "../Components/CalculoObjeto";
import Produto from "../Components/Produto";
import "./Produtos.css";

const ListaProdutos = [
  {
    id: 0,
    nome: "Tony Stark",
    preco: 50.45,
    url: "https://images.tcdn.com.br/img/img_prod/621461/funko_pop_tony_stark_vingadores_ultimato_449_1431_1_20190621173202.jpg",
    tempo: "21:00",
    peso: 0.068,
    tamanho: "15cm",
    escala: "100%",
    pintura: 40.0,
    primers: 2,
  },
  {
    id: 1,
    nome: "Wanda",
    preco: "60.45",
    url: "https://m.media-amazon.com/images/I/61QJ5yB6caL._AC_SL1300_.jpg",
    tempo: "00:40",
    peso: 0.03,
    tamanho: "15cm",
    escala: "100%",
    pintura: 50.0,
    primers: 2,
  },
  {
    id: 3,
    nome: "Visão",
    preco: "70.45",
    url: "https://m.media-amazon.com/images/I/617kDClds4L._AC_SY550_.jpg",
    tempo: "00:40",
    peso: 0.03,
    tamanho: "15cm",
    escala: "100%",
    pintura: 50.0,
    primers: 2,
  },
  {
    id: 4,
    nome: "WarMachine",
    preco: "80.45",
    url: "https://m.media-amazon.com/images/I/71v1ULEzReL._AC_SL1500_.jpg",
    tempo: "00:40",
    peso: 0.03,
    tamanho: "15cm",
    escala: "100%",
    pintura: 50.0,
    primers: 2,
  },
  {
    id: 5,
    nome: "Loki",
    preco: "50.45",
    url: "https://m.media-amazon.com/images/I/51Pem4zbZeS._AC_SX425_.jpg",
    tempo: "00:40",
    peso: 0.03,
    tamanho: "15cm",
    escala: "100%",
    pintura: 50.0,
    primers: 2,
  },
  {
    id: 6,
    nome: "Spider Man",
    preco: "60.45",
    url: "https://images.tcdn.com.br/img/img_prod/621461/funko_pop_homem_aranha_homem_aranha_de_volta_ao_lar_220_1281_1_20190529161237.jpg",
    tempo: "00:40",
    peso: 0.03,
    tamanho: "15cm",
    escala: "100%",
    pintura: 50.0,
    primers: 2,
  },
  {
    id: 7,
    nome: "Doc Stranger Darkhold",
    preco: "70.45",
    url: "https://m.media-amazon.com/images/I/51MmktikCYL._AC_SX425_.jpg",
    tempo: "00:40",
    peso: 0.03,
    tamanho: "15cm",
    escala: "100%",
    pintura: 50.0,
    primers: 2,
  },
  {
    id: 8,
    nome: "Hulk",
    preco: "80.45",
    url: "https://a-static.mlcdn.com.br/1500x1500/funko-pop-hulk-com-a-manopla-do-infinito-super-sized-pop-vingadores-ultimato/lojam2s/722925471/f3364b17d29d350a5cf549a8b82271b0.jpg",
    tempo: "00:40",
    peso: 0.03,
    tamanho: "15cm",
    escala: "100%",
    pintura: 50.0,
    primers: 2,
  },
];

const Produtos = ({ pesquisa,pMaterial,cEnergia,salario,despesas,primer,lucro }) => {
  return (
    <div className="ProdutosContainer">
      <h2 className="ProdutosTitulo">Produtos</h2>
      <div className="ProdutosLista">
        {ListaProdutos.filter((produto) =>
          produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
        ).map((produto) => (
          <Produto
            key={produto.id}
            url={produto.url}
            nome={produto.nome}
            preco={
              <Calcular
                impressao={produto.tempo}
                pla={produto.peso}
                Tprimers={produto.primers}
                pintura={produto.pintura}
                material={pMaterial}
                custoenergia={cEnergia}
                salario={salario}
                despesas={despesas}
                primer={primer}
                lucro={lucro}
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Produtos;
