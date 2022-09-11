import React from 'react';
import "./LineCalc.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd, faClock, faBalanceScaleLeft, faTrash } from "@fortawesome/free-solid-svg-icons"

function LineCalc({ pl_time, pl_mat, tipo, id,lista,setLista }) {
    function handleClick(id){
        setLista(lista.filter(item => item.tempo !== pl_time));
    }
    if (tipo !== "soma") {
        return (
            <>
                <div className="line">
                    <div className="flexItem">
                        <FontAwesomeIcon className="icone" icon={faClock} alt='icon' ></FontAwesomeIcon>
                        <p>{pl_time}</p>
                    </div>
                    < div className="flexItem">
                        <FontAwesomeIcon className="icone" icon={faBalanceScaleLeft} alt='icon' ></FontAwesomeIcon>
                        <p>{pl_mat.toFixed(3)} Kg</p>
                        <FontAwesomeIcon onClick={()=>handleClick(id)} className="icone" icon={faTrash} alt='icon' ></FontAwesomeIcon>
                    </div>
                </div>
            </>
        )
    }
    else return (
        <>
            <div className="soma">
                < div className="flexItem">
                    <FontAwesomeIcon className="icone" icon={faClock} alt='icon'  ></FontAwesomeIcon>
                    <p>{pl_time}</p>
                </div>
                < div className="flexItem">
                    <FontAwesomeIcon className="icone" icon={faBalanceScaleLeft} alt='icon' ></FontAwesomeIcon>
                    <p>{pl_mat.toFixed(3)} Kg</p>
                </div>
            </div>
        </>
    )

}

export default LineCalc