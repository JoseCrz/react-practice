import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Footer.css'
import '../styles/Wrapper.css'

class Footer extends React.Component {
  render () {
    return (
      <div className="Wrapper">
        <footer className="Footer">
          <div className="Footer__top">
              <div className="Footer__container">
                  <p>¿Tienes alguna duda?</p>
                  <Link className="Footer__button" to="/">Contáctanos</Link>
              </div>
          </div>
          <div className="Footer__bottom">
              <p className="Footer__credits">Consume Xalapa todo los derechos reservados</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer