import React from 'react'
import './box.css'
import Briefcase from '../elements/briefcase.png'
import Award from '../elements/award.png'
import Book from '../elements/book.png'
import PlusIcon from '../elements/ellipse.png'


export default () =>
    <div className="Card">
        <div className="Box">
            <img src={Briefcase} alt="icon briefcase" />
            <p>Para empresas</p>
            <button className="btn"><img src={PlusIcon} alt=""/></button>
        </div>

        <div className="Box">
            <img src={Award} alt="icon award" />
            <p>Para estudantes</p>
            <button className="btn"><img src={PlusIcon} alt=""/></button>
        </div>

        <div className="Box">
            <img src={Book} alt="icon book" />
            <p>Para mentores</p>
            <button className="btn"><img src={PlusIcon} alt=""/></button>
        </div>
    </div>