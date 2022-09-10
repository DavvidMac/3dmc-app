import React from "react";
import "./Produto.css";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage,db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Produto = ({ nome, url, preco, id }) => {
  const [imageUrls, setImageUrls] = React.useState([]);
  const imagesListRef = ref(storage, "images/");

  React.useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const deleteitem = async (id) => {
    //console.log(id.toString())
    const data = doc(db, "Biblioteca", id);
    await deleteDoc(data);
    alert("Objetos Deletado")
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
