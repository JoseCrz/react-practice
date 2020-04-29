import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Hero.css'

class Hero extends React.Component {
  render () {
    return (
      <section className="Hero" id="inicio">
        <div className="Hero__content">
            <h1 className="Hero__title">consume<span className="Hero__title Hero__highlight">xalapa</span></h1>
            <h3 className="Hero__slogan">Te invitamos al primer Meetup de la cominidad</h3>
            <Link to="/badges" className="Hero__button">Registrarse</Link>
            <p className="Hero__message"><small className="Hero__message">Con tu donativo ayudas a que los negocios en Xalapa<br />puedan seguir dando productos chingones.</small></p>
        </div>
      </section>
    )
  }
}

export default Hero