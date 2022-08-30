import React from "react";
import Calcular from "../Components/CalculoObjeto";
import Produto from "../Components/Produto";
import "./Produtos.css";

const Produtos = ({ listaProdutos,pesquisa,pMaterial,cEnergia,salario,despesas,primer,lucro }) => {
  return (
    <div className="ProdutosContainer">
      <h2 className="ProdutosTitulo">Produtos</h2>
      <div className="ProdutosLista">
        {listaProdutos.filter((produto) =>
          produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
        ).map((produto,index) => (
          <Produto
            key={index}
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
