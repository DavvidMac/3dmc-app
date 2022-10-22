import React from "react";
import { db, storage } from "./firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";

export const FbContext = React.createContext();
export const Fb = ({ children }) => {
  const [listaProdutos, setListaProdutos] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState(""); //for navbar search
  const objectLibrary = collection(db, "Biblioteca");
  const infoLibrary = collection(db, "Info");
  //info part
  const [pMaterial, setPMaterial] = React.useState(120.0);
  const [cEnergia, setCEnergia] = React.useState(0.94);
  const [salario, setSalario] = React.useState(1100);
  const [despesas, setDespesas] = React.useState(80);
  const [primer, setPrimer] = React.useState(17.0);
  const [lucro, setLucro] = React.useState(30);

  const [infos, setInfos] = React.useState(); //get from firebase

  const [imageUrls, setImageUrls] = React.useState([]);
  const imagesListRef = ref(storage, "images/");

  React.useEffect(() => {
    
    if (infos !== undefined) {
      setLucro(infos[0].lucro);
      setDespesas(infos[0].despesas);
      setPMaterial(infos[0].pMaterial);
      setPrimer(infos[0].primer);
      setSalario(infos[0].salario);
      setCEnergia(infos[0].cEnergia);
      
    }
  }, [infos]);

  React.useEffect(() => {
    
    const getPoducts = async () => {
      const data = await getDocs(objectLibrary);
      setListaProdutos(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    const getInfo = async () => {
      const data = await getDocs(infoLibrary);
      setInfos(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getPoducts();
    getInfo();
    
  }, []);
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
    <FbContext.Provider
    value={{listaProdutos,
    setListaProdutos,
    pesquisa,
    setPesquisa,
    pMaterial,
    setPMaterial,
    cEnergia,
    setCEnergia,
    salario,
    setSalario,
    despesas,
    setDespesas,
    primer,
    setPrimer,
    lucro,
    setLucro,
    imageUrls,
    setImageUrls}}
    >
      {children}
    </FbContext.Provider>
  );
};
