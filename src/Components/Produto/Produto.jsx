import React from "react";
import { Link, } from "react-router-dom";
import "./Produto.css";
import {
  ref,
  deleteObject,
} from "firebase/storage";
import { storage, db } from "../../Utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

const Produto = ({
  nome,
  url,
  preco,
  id,
  idProduto,
  tamanho,
  escala,
  pintura,
  primers,
  tempo,
  peso,
  money,
  imageUrls
}) => {
  const [deleta, setDeleta] = useState(0);
  useEffect(() => {
    if (deleta > 0) {
      if (window.confirm(`Confirma deletar ${nome} ?`)) {
        deleteitem(id);
      }
      else {
        alert(`Item ${nome} Não foi alterado`);
      }
    }
  }, [deleta]);

  const deleteitem = async (id) => {
    const data = doc(db, "Biblioteca", id);
    await deleteDoc(data);
    deleteObject(ref(storage, url));
    alert(`Item ${nome} excluded`);
  };
  return (
    <>
      <div>
        <div className="ProdutoContainer">
          {imageUrls
            .filter(
              (produto) => produto.includes(encodeURIComponent(url)) // O URL SALVO NO ARRAY É DIFERENTe DO QUE CHEGA PELO PADRÃO DE HTTP
            )
            .map((produto, index) => (
              <img
                className="Produtoimg"
                key={index}
                src={produto}
                alt={index}
              />
            ))}
          <div className="ProdutoDescription">
            <h4>{nome}</h4>
            <p>Price R$ {preco}</p>
            <p className="ProdutoP">Size: {tamanho} | Scale: {escala}</p>
            <p className="ProdutoP">Paint: {pintura} | Primers: {primers}</p>
            <p className="ProdutoP">Time: {tempo} | Weight: {peso.toFixed(3)}</p>

            <p className="ProdutoP">Pay R$:{money}</p>
            <button
              className="ProdutoButton"
              onClick={() => {
                setDeleta(deleta + 1)
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produto;
