import React from "react";
import "./Edit.css";

const Edit = ({ listaProdutos, imageUrls }) => {
  const [escala, setEscala] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [tempo, setTempo] = React.useState("");
  const [pintura, setPintura] = React.useState("");
  const [primers, setPrimes] = React.useState("");
  const [tamanho, setTamanho] = React.useState("");
  console.log(listaProdutos);
  /*{index}
          {produto.url}
          {produto.nome}
          {produto.id}
          {produto.money}
          {produto.idProduto}
          {produto.tamanho}
          {produto.escala}
          {produto.pintura}
          {produto.primers}
          {produto.tempo}
          {produto.peso}
          {produto.preco}
          {imageUrls}*/
  return (
    <div>
      {listaProdutos.filter((produto) =>
            produto.nome.toLowerCase().includes(window.location.search.toLowerCase())
          )
      .map((produto, index) => (
        <p>
          {index}
          {produto.url}
          {produto.nome}
          {produto.id}
          {produto.money}
          {produto.idProduto}
          {produto.tamanho}
          {produto.escala}
          {produto.pintura}
          {produto.primers}
          {produto.tempo}
          {produto.peso}
          {produto.preco}
          {imageUrls}
        </p>
      ))}

      <input
        className="CadastroInputProduto"
        type="text"
        placeholder="Id Product"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      ></input>
    </div>
  );
};

export default Edit;
