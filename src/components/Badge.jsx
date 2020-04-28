import React from 'react'

import logo from '../images/logo.svg'

import '../styles/Badge.css'

class Badge extends React.Component {
  render () {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>José<br/>Cuevas</h1>
        </div>
        <div className="Badge__section-info">
          <h3>Full Stack Developer</h3>
          <a href="https://twitter.com/josecrz13">@josecrz13</a>
        </div>
        <div className="Badge__footer">
          <p>#ConsumeXalapa</p>
        </div>
      </div>
    )
  }
}

export default Badge