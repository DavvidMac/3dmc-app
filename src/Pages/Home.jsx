import React from 'react';
import "./Home.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react'
import Register from './Register'
import Calc from './Calc'
import Info from './Info'

function Home() {
    return (
        <>
            <img src={require('../Images/LOGO.png')} className="logoloja" alt='Logo' />
            < p className="lojaname">3DMC LOJA</p>
            <div className="container">
                <a>Registrar</a>
                <a>Catálogo</a>
                <a>Informações</a>
            </div>
        </>
    )
}

export default Home;