import React from 'react';
import "./Calc.css"
import NavBar from '../Components/NavBar'
import LineCalc from '../Components/LineCalc'
import Info from '../Components/Info'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd } from "@fortawesome/free-solid-svg-icons"

function Calc() {
    return (
        <>
            <NavBar />
            <div className="containercenter">
                <div className="calccontainer">
                    <h1 className="titulo">Calculadora</h1>
                    <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
                    <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
                    <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
                    <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
                    <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
                    <LineCalc pl_time="00:10" pl_Mat="0.5" tipo="" />
                    <LineCalc pl_time="00:00" pl_Mat="0.2" tipo="soma" />
                </div>
                <Info />
            </div>
        </>
    )
}
export default Calc;