import React from 'react';
import "./LineCalc.css"
import BalanceLogo from '../Icons/balance.svg';
import ClockLogo from '../Icons/clock.svg';
import DeleteLogo from '../Icons/delete.svg';
function LineCalc({ pl_time, pl_Mat, tipo }) {
    if (tipo !== "soma") {
        return (
            <>
                <div className="line">
                    <img src={ClockLogo} className="icone" alt='icon' />
                    <input className="InCalc" type="text" placeholder={pl_time}></input>
                    <img src={BalanceLogo} className="icone" alt='icon' />
                    <input className="InCalc" type="text" placeholder={pl_Mat}></input>
                    <img src={DeleteLogo} className="icone" alt='icon' />
                </div>
            </>
        )
    }
    else return (
        <>
            <div className="soma">
                <img src={ClockLogo} className="icone" alt='icon' />
                <input className="InCalc" type="text" placeholder={pl_time}></input>
                <img src={BalanceLogo} className="icone " alt='icon' />
                <input className="InCalc" type="text" placeholder={pl_Mat}></input>

            </div>
        </>
    )

}

export default LineCalc