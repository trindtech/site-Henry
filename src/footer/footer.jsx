import React from "react"
import './footer.css'
import Logo from '../elements/logo.png'
import Whats from '../elements/whatsapp.png'
import Linkedin from '../elements/linkedin.png'
import Instagram from '../elements/instagram.png'
import Email from '../elements/email.png'

export default () =>
    <div className="Footer">
        <footer>
            <div className="Logo">
                <img src={Logo} alt="Logo TrindTech" />
            </div>
            <div className="SCC">
                <p>Soluções, Conexão e Cultura em TI</p>
            </div>
            <div className="Links">
                <a href="https://www.instagram.com/trindtech/" target="_blank"><img src={Instagram} alt="Ícone Instagram" /></a>
                <a href="https://www.linkedin.com/company/trindtech/about/" target="_blank"><img src={Linkedin} alt="Ícone Linkedin" /></a>
                <a href="https://wa.me/555191264978" target="_blank"><img src={Whats} alt="Ícone WhatsApp" /></a>
                <a href="mailto:contato@trindtech.com.br?subject=Site" target="_blank"><img src={Email} alt="Ícone Email" /></a>
            </div>
        </footer>
    </div>