import React from "react";
import "./Produto.css";
//import { ref, getDownloadURL, listAll } from "firebase/storage";
import { /*storage*/ db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
const Produto = ({ nome, url,imageUrls, preco, id ,pintura,primers,tempo,peso}) => {

  const deleteitem = async (id) => {
    //console.log(id.toString())
    const data = doc(db, "Biblioteca", id);
    await deleteDoc(data);
    alert("Objeto Deletado")
  };
  return (
    <>
      <div className="ProdutoContainer">
        {imageUrls
          .filter(
            (produto) => produto.includes(encodeURIComponent(url)) // O URL SALVO NO ARRAY É DIFERENTe DO QUE CHEGA PELO PADRÃO DE HTTP
          )
          .map((produto, index) => (
            <img key={index} src={produto} alt={index} />
          ))}
        <div className="ProdutoDescription">
          <h4>{nome}</h4>
          <p>R${preco}</p>
          <p>Pintura:{pintura}</p>
          <p>Primers:{primers}</p>
          <p>Tempo:{tempo}</p>
          <p>Peso:{peso}</p>
          <button className="ProdutoButton"
            onClick={() => {
              deleteitem(id);
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </>
  );
};

export default Produto;
