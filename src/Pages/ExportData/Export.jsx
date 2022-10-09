import React from "react";
import csvToArray from "../.././Utils/csvToArray";
import arrayToCsv from "../.././Utils/arrayToCsv";

const Export = (listaProdutos) => {
  const [newArray, setNewArray] = React.useState();
  const [csvFile, setcsvFile] = React.useState();
  const [a, setA] = React.useState([]);

  function handleClick(e) {
    e.preventDefault();
    if (csvFile !== undefined) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const text = e.target.result;
        const data = csvToArray(text);
        //const array = JSON.stringify(data);
        setA(data);
        //document.write(array);
      };
      reader.readAsText(csvFile);
    }
  }
  function download(){
    if (a!==null){
      setNewArray(arrayToCsv(listaProdutos))
    }
  }
  return (
    <div className="App">
      <form id="myForm">
        <input
          type="file"
          id="csvFile"
          accept=".csv"
          onChange={(e) => setcsvFile(e.target.files[0])}
        />
        <br />
        <input type="submit" value="Enviar" onClick={(e) => handleClick(e)} />
      </form>
      <input  onClick={(a) => download(a)} />
      {a.map((produto, index) => (
        <p key={index}>
          {produto.name}|{produto.price}
        </p>
      ))}
    </div>
  );
};

export default Export;
