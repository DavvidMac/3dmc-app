import React from "react";
import Produto from "../Components/Produto";
import "./Produtos.css";

const ListaProdutos = [
  {
    id: 0,
    nome: "Tony Stark",
    preco: "50.45",
    url: "https://images.tcdn.com.br/img/img_prod/621461/funko_pop_tony_stark_vingadores_ultimato_449_1431_1_20190621173202.jpg",
  },
  {
    id: 1,
    nome: "Wanda",
    preco: "60.45",
    url: "https://m.media-amazon.com/images/I/61QJ5yB6caL._AC_SL1300_.jpg",
  },
  {
    id: 3,
    nome: "Visão",
    preco: "70.45",
    url: "https://m.media-amazon.com/images/I/617kDClds4L._AC_SY550_.jpg",
  },
  {
    id: 4,
    nome: "WarMachine",
    preco: "80.45",
    url: "https://m.media-amazon.com/images/I/71v1ULEzReL._AC_SL1500_.jpg",
  },
];

const Produtos = ({pesquisa}) => {
  return (
    <>
    <h1 className="TituloProdutos">Produtos</h1>
    <div className="ListaProdutos">
      {ListaProdutos.filter(produto=>(produto.nome.includes(pesquisa))).map((produto) => (
        <Produto
          key={produto.id}
          url={produto.url}
          nome={produto.nome}
          preco={produto.preco}
        />
      ))}
    </div>
    </>
  );
};

export default Produtos;
