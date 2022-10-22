import React from "react";
import { FbContext } from "../../Utils/Fb";
import Produto from "../../Components/Produto/Produto";
import "./Produtos.css";

const Produtos = () => {
  const information=React.useContext(FbContext)
  console.log((information))
  return (
    <div className="ProdutosContainer">
      <h2 className="ProdutosTitulo">Products</h2>
      <div className="ProdutosLista">
        {information.listaProdutos
          .filter((produto) =>
            produto.nome.toLowerCase().includes(information.pesquisa.toLowerCase())
          )
          .map((produto, index) => (
            <Produto
              key={index}
              url={produto.url}
              nome={produto.nome}
              id={produto.id}
              money={produto.money}
              idProduto={produto.idProduto}
              tamanho={produto.tamanho}
              escala={produto.escala}
              pintura={produto.pintura}
              primers={produto.primers}
              tempo={produto.tempo}
              peso={produto.peso}
              preco={produto.preco}
              imageUrls={information.imageUrls}
            />
          ))}
      </div>
    </div>
  );
};

export default Produtos;
