import React from 'react';
import "./Calc.css"
import TopBar from '../Components/TopBar'
import LineCalc from '../Components/LineCalc'
import doneadd from '../Icons/add.svg';
function Calc() {
    return (
        <>
            <TopBar Child="Calculadora" />
            <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
            <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
            <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
            <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
            <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
            <LineCalc pl_time="00:00" pl_Mat="0.2" tipo="soma" />
            <img id="add" src={doneadd} className="icone" />
        </>
    )
}
export default Calc;