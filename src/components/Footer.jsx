import React from 'react'

import '../styles/Footer.css'
import '../styles/Wrapper.css'

class Footer extends React.Component {
  render () {
    return (
      <div className="Wrapper">
        <footer class="Footer">
          <div class="Footer__top">
              <div class="Footer__container">
                  <p>¿Tienes alguna duda?</p>
                  <a class="Footer__button" href="#">Contáctanos</a>
              </div>
          </div>
          <div class="Footer__bottom">
              <p class="Footer__credits">Consume Xalapa todo los derechos reservados</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer