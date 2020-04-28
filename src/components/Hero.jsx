import React from 'react'

import '../styles/Hero.css'

class Hero extends React.Component {
  render () {
    return (
      <section className="Hero" id="inicio">
        <div className="Hero__content">
            <h1 className="Hero__title">consume<span className="Hero__title Hero__highlight">xalapa</span></h1>
            <h3 className="Hero__slogan">Restaurantes asombrosos reunidos en un mismo lugar</h3>
            <a href="/" className="Hero__button">Explora los locales</a>
            <p className="Hero__message"><small className="Hero__message">Con tu compra ayudas a que los negocios en Xalapa<br />puedan seguir dando productos chingones.</small></p>
        </div>
      </section>
    )
  }
}

export default Hero