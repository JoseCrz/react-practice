import React from 'react'

import '../styles/Header.css'

class Header extends React.Component {
  render () {
    return (
      <header className="Header">
        <h2 className="Logo">consume<span className="Logo__highlight">xalapa</span>.com</h2>
        <nav className="Header__nav" id="menu">
            <ul className="Header__list">
                <li className="Header__list-item"><a href="/" className="Header__link">Mapa</a></li>
                <li className="Header__list-item"><a href="/" className="Header__link">Promociones</a></li>
                <li className="Header__list-item"><a href="/" className="Header__link">Contacto</a></li>
                <li className="Header__list-item"><a href="/" className="Header__link">Nosotros</a></li>
                <li className="Header__list-item"><a className="Header__link Header__link--cta" href="/">Inscribe tu Local</a></li>
                <li className="Header__list-item Header__list-item--button" id="light-button"><i className="icon-light" ></i></li>
            </ul>  
        </nav>
        <div className="Burger-menu" id="burger-button">
            <i className="icon-menu"></i>
        </div>
      </header>
    )
  }
}

export default Header