import React from "react"
import './body.css'
import IconDown from '../elements/down.png'
import IconPerson from '../elements/users.png'
import IconTarget from '../elements/target.png'
import IconTruck from '../elements/truck.png'
import Cadastrar from '../elements/retangle-mail-whats.png'

export default () =>
    <div className="Body">
        <div className="icon-direction">
            <img src={IconDown} alt="Icon Down" />
        </div>
        <div className="pq-trindtech">
            <h1>Porque escolher a gente</h1>
        </div>
        <div className="Divs">
            <div className="boxes">
                <img src={IconPerson} alt="Icon Persons" />
                <h3>O que a Trindtech tem que os outros não tem?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, molestias laborum. Amet laborum molestias minima vitae similique velit modi nobis. Illo vel quidem sed vitae nemo officiis similique sunt aliquid?</p>
                <p className="hashtags">#LIDERANÇA</p>
            </div>
            <div className="boxes">
                <img src={IconTarget} alt="Icon Target" />
                <h3>O que a Trindtech tem que os outros não tem?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, molestias laborum. Amet laborum molestias minima vitae similique velit modi nobis. Illo vel quidem sed vitae nemo officiis similique sunt aliquid?</p>
                <p className="hashtags">#OBJETIVOS</p>
            </div>
            <div className="boxes">
                <img src={IconTruck} alt="Icon Truck" />
                <h3>O que a Trindtech tem que os outros não tem?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, molestias laborum. Amet laborum molestias minima vitae similique velit modi nobis. Illo vel quidem sed vitae nemo officiis similique sunt aliquid?</p>
                <p className="hashtags">#PRÁTICA</p>
            </div>
        </div>
        <div className="dt">
            <p>Queremos estar naquele lugar em que o propósito faz o olho brilhar, e que o olhar pra frente já não é mais um sonho, mas uma meta a ser planejada.</p>
            <p>Entendemos que o agora é digital e é esse agora que queremos construir juntos: queremos conectar pessoas, desafiar produtos, construir soluções e formar profissionais e equipes de Engenharia de Software com a paixão e a coragem para transformar nossos futuros.</p>
        </div>
        <div className="duvidas">
            <h2>Dúvidas? Estamos aqui para te ajudar!</h2>
            <p>Cadastre seu contato que falaremos com você:</p>
            <h4><a href="#" target="_blank">Cadastrar</a></h4>
        </div>
    </div>
