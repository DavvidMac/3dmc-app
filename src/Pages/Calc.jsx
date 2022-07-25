import React from 'react';
import "./Calc.css"
import TopBar from '../Components/TopBar'
import LineCalc from '../Components/LineCalc'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAdd} from "@fortawesome/free-solid-svg-icons"

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
            <FontAwesomeIcon className="icone" icon={faAdd} alt='icon' ></FontAwesomeIcon>
        </>
    )
}
export default Calc;