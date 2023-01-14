import React from "react";
import { Navigate } from "react-router-dom";
import "./Produto.css";
import {
  ref,
  deleteObject,
} from "firebase/storage";
import { storage, db } from "../../Utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Produto = ({
  nome,
  url,
  preco,
  id,
  idProduto,
  pintura,
  primers,
  tempo,
  peso,
  money,
  imageUrls
}) => {

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
            <p className="ProdutoP">Pay R$:{money}</p>
            <p className="ProdutoP">Paint: {pintura} | Primers: {primers}</p>
            <p className="ProdutoP">Time: {tempo} | Weight: {peso.toFixed(3)}</p>
            <button
              className="ProdutoButton"
              onClick={() => {
                deleteitem(id);
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
