import React from 'react';
import './App.css';
import Produtos from './Pages/Produtos';
import NavBar from './Components/NavBar'

function App() {

const[pesquisa,setPesquisa]=React.useState('')

  return (
    <div className="App">
      <NavBar pesquisa={pesquisa} setPesquisa={setPesquisa}/>
      <Produtos pesquisa={pesquisa}/>
    </div>
  );
}
export default App;
