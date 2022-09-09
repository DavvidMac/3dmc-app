import React from "react";
import "./Produto.css";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";

const Produto = ({ nome, url, preco }) => {
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
  console.log(encodeURIComponent(url))

  return (
    <>
      <div className="ProdutoContainer">
      {imageUrls.filter((produto) =>
          produto.includes(encodeURIComponent(url)) // O URL SALVO NO ARRAY É DIFERENTO DO QUE CHEGA PELO PADRÃO DE HTTP
        ).map((produto,index) => 
          <img key={index} src={produto} alt={index}/>)}                         
        <div className="ProdutoDescription">
          <h4>{nome}</h4>
          <p>{preco}</p>
        </div>
      </div>
    </>
  );
};

export default Produto;
