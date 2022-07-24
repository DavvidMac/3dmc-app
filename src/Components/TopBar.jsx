import React, { Children } from 'react';
import backLogo from '../Icons/back.svg';
import doneLogo from '../Icons/done.svg';
import photoLogo from '../Icons/photo.svg';
import "./TopBar.css"
function TopBar({Child}) {
    return (
        <>
            <div className="containerline">
                <img src={backLogo} className="icone" />
                <p className="title">{Child}</p>
                <img src={doneLogo} className="icone" />
            </div>
        </>
    )
}
export default TopBar;