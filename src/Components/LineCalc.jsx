import React from 'react';
import "./LineCalc.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd, faClock, faBalanceScaleLeft, faTrash } from "@fortawesome/free-solid-svg-icons"

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
                < div className="flexItem">
                    <FontAwesomeIcon className="icone" icon={faClock} alt='icon' ></FontAwesomeIcon>
                    <p>Total tempo</p>
                </div>
                < div className="flexItem">
                    <FontAwesomeIcon className="icone" icon={faBalanceScaleLeft} alt='icon' ></FontAwesomeIcon>
                    <p>Total material</p>
                </div>
                <FontAwesomeIcon className="icone" icon={faAdd} alt='icon' ></FontAwesomeIcon>
            </div>
        </>
    )

}

export default LineCalc