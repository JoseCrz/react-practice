import React from 'react'

import logo from '../images/logo.svg'

class Badge extends React.Component {
  render () {
    return (
      <div className="">
        <div className="">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>José<br/>Cuevas</h1>
        </div>
        <div className="">
          <p>Full Stack Developer</p>
          <a href="https://twitter.com/josecrz13">@josecrz13</a>
        </div>
        <div className="">
          <p>#ConsumeXalapa</p>
        </div>
      </div>
    )
  }
}

export default Badge