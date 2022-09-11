import React from "react";
import Calcular from "../../Utils/CalculoObjeto";
import Produto from "../../Components/Produto/Produto";
import "./Produtos.css";

const Produtos = ({
  listaProdutos,
  pesquisa,
  pMaterial,
  cEnergia,
  salario,
  despesas,
  primer,
  lucro,
  imageUrls
}) => {
  return (
    <div className="ProdutosContainer">
      <h2 className="ProdutosTitulo">Produtos</h2>
      <div className="ProdutosLista">
        {listaProdutos
          .filter((produto) =>
            produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
          )
          .map((produto, index) => (
            <Produto
              key={index}
              url={produto.url}
              nome={produto.nome}
              id={produto.id}
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
              tamanho={produto.tamanho}
              escala={produto.escala}
              pintura={produto.pintura}
              primers={produto.primers}
              tempo={produto.tempo}
              peso={produto.peso}
              imageUrls={imageUrls}
            />
          ))}
      </div>
    </div>
  );
};

export default Produtos;
