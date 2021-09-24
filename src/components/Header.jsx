import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    /* MENU SHOW */ 
    const handleShow = () =>{
        let nav = ""
        nav = document.getElementById('nav-menu')
        nav.classList.toggle('show')
    }
    


    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="" className="nav__logo">FSCB</Link>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><Link onClick={handleShow} to="/" className="nav__link">Inicio</Link></li>
                        <li className="nav__item"><Link onClick={handleShow} to="Perfil" className="nav__link">Perfil</Link></li>
                        <li className="nav__item"><Link onClick={handleShow} to="Estudios" className="nav__link">Estudios</Link></li>
                        <li className="nav__item"><Link onClick={handleShow} to="Experiencia" className="nav__link">Experiencia</Link></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={handleShow}>
                    <ion-icon  name="menu"></ion-icon>
                </div>
            </nav>
        </header>
    )
}

export default Header
