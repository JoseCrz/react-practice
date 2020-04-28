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
          <h1>{this.props.name}<br/>{this.props.lastname}</h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <a href="https://twitter.com/josecrz13">@{this.props.twitter}</a>
        </div>
        <div className="Badge__footer">
          <p>#ConsumeXalapa</p>
        </div>
      </div>
    )
  }
}

export default Badge