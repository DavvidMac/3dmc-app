import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleLeft,faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"

import "./TopBar.css"
function TopBar({Child}) {
    return (
        <>
            <div className="containerline">
                <FontAwesomeIcon className="icone" icon={faArrowAltCircleLeft} alt='icon' ></FontAwesomeIcon>
                <p className="title">{Child}</p>
                <FontAwesomeIcon className="icone" icon={faArrowAltCircleRight} alt='icon' ></FontAwesomeIcon>
            </div>
        </>
    )
}
export default TopBar;