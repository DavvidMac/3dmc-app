import React, {useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import "./Calc.css"
import Calcular from '../Components/CalculoObjeto'
import NavBar from '../Components/NavBar'
import LineCalc from '../Components/LineCalc'
import Info from '../Components/Info'
import { somaHora } from '../utils/tempoUtils'
let object = [] //lista vazia

function Calc() {

    const [lista, setLista] = React.useState(object);
    const [tempo, setTempo] = React.useState('');
    const [peso, setPeso] = React.useState('');

    const [summ, setSumm] = React.useState(0);
    const [sumt, setSumT] = React.useState('00:00');

    useEffect(()=>{
        if (lista.length <1) return;
        let soma = lista.map((itemm) => itemm.peso).reduce((prev, curr) => prev + curr, 0) 
        //pega apenas as horas do objeto, criando um novo array de horas 
        let horas = lista.map((itemm) => itemm.tempo)
        //calcula as horas e seta no estado
        setSumT(somaHora(horas))
        setSumm(soma)
    },[lista])

    const handleAdd = () => {
        setLista([...lista, { tempo: tempo, peso: parseFloat(peso) }])
        //console.log([...lista, { tempo, peso }])
        setTempo('');
        setPeso('');
    }
    
    return (
        <>
            <NavBar />
            <div className="containercenter">
                <div className="calccontainer">
                    <h1 className="titulo">Calculadora</h1>
                    {lista.map((itemm, index) => (
                        <LineCalc key={index} pl_time={itemm.tempo} pl_mat={itemm.peso} tipo="" />))}
                    <LineCalc pl_time={sumt} pl_mat={summ} tipo="soma" />
                    <input className="inpInfo" type="text" placeholder="Tempo" value={tempo} onChange={(e) => setTempo(e.target.value)} ></input>
                    <input className="inpInfo" type="number" step="0.01" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)}></input>
                    <FontAwesomeIcon className="icone" icon={faAdd} alt='icon' onClick={handleAdd}></FontAwesomeIcon>
                    <Calcular impressao={sumt} pla={summ} lucro={30}/>
                </div>
                <Info />
            </div>
        </>
    )
}
export default Calc;