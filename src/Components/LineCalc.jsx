import React from 'react';
import "./LineCalc.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faBalanceScaleLeft, faTrash } from "@fortawesome/free-solid-svg-icons"

function LineCalc({ pl_time, pl_Mat, tipo }) {
    if (tipo !== "soma") {
        return (
            <>
                <div className="line">
                    <div className="flexItem"><FontAwesomeIcon className="icone" icon={faClock} alt='icon' ></FontAwesomeIcon>
                        <input className="InCalc" type="text" placeholder={pl_time}></input>
                    </div>
                    < div className="flexItem">
                        <FontAwesomeIcon className="icone" icon={faBalanceScaleLeft} alt='icon' ></FontAwesomeIcon>
                        <input className="InCalc" type="text" placeholder={pl_Mat}></input>
                        <FontAwesomeIcon className="icone" icon={faTrash} alt='icon' ></FontAwesomeIcon>
                    </div>

                </div>
            </>
        )
    }
    else return (
        <>
            <div className="soma">
                <FontAwesomeIcon className="icone" icon={faClock} alt='icon' ></FontAwesomeIcon>
                <input className="InCalc" type="text" placeholder={pl_time}></input>
                <FontAwesomeIcon className="icone" icon={faBalanceScaleLeft} alt='icon' ></FontAwesomeIcon>
                <input className="InCalc" type="text" placeholder={pl_Mat}></input>

            </div>
        </>
    )

}

export default LineCalc