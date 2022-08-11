import React, { useState, useEffect } from "react"
import './header.css'
import Logo from '../elements/logo.png'

export default ({ action }) =>
    <div className="header">
        <div className="menu">
            <div className="frase-header">
                <h1>Soluções, Conexão e <b>Cultura em TI</b></h1>
            </div>
            <div className={action ? 'activeColor' : ''}>
                <div className="logo">
                    <img src={Logo} alt="Logo TrindTech" />
                </div>
                <div className="itens-link">
                    <a href="#" className="para-empresas">Para empresas</a>
                    <a href="#" className="para-mentores">Para mentores</a>
                    <a href="#" className="para-estudantes">Para estudantes</a>
                    <a href="#" className="contato">Entre em contato</a>
                </div>
            </div>
        </div>
    </div>