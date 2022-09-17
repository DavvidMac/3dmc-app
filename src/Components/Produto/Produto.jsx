import React from "react";
import "./Produto.css";
import { ref, getDownloadURL, listAll ,getStorage, deleteObject } from "firebase/storage";
import { storage, db } from "../../Utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Produto = ({ nome, url, preco, id,idProduto, pintura, primers, tempo, peso }) => {
  const [imageUrls, setImageUrls] = React.useState([]);
  const imagesListRef = ref(storage, "images/");

  const deleteitem = async (id) => {
    const data = doc(db, "Biblioteca", id);
    await deleteDoc(data);
    deleteObject(ref(storage,url));
  };
  React.useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <>
      <div className="ProdutoContainer">
        {imageUrls
          .filter(
            (produto) => produto.includes(encodeURIComponent(url)) // O URL SALVO NO ARRAY É DIFERENTe DO QUE CHEGA PELO PADRÃO DE HTTP
          )
          .map((produto, index) => (
            <img className="Produtoimg" key={index} src={produto} alt={index} />
          ))}
        <div className="ProdutoDescription">
          <h4>{nome}</h4>
          <p>{idProduto}</p>
          <p>Priece R$ {preco}</p>
          <p className="ProdutoP">Paint: {pintura}</p>
          <p className="ProdutoP">Primers: {primers}</p>
          <p className="ProdutoP">Time: {tempo}</p>
          <p className="ProdutoP">Weight: {peso.toFixed(3)}</p>
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

    </>
  );
};

export default Produto;
