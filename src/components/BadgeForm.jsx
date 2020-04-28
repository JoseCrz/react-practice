import React from 'react'

import '../styles/Form.css'

class BadgeForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
  }
  
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    })
  }

  handleClick = e => {
    console.log('Button clicked!')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <label className="Form__label">Name</label>
        <input onChange={this.handleChange} className="Form__input" type="text" name="name" />
        <label className="Form__label">Lastname</label>
        <input className="Form__input" type="text" name="lastname" />
        <label className="Form__label">Twitter</label>
        <input className="Form__input" type="text" name="twitter" />
        <button onClick={this.handleClick} className="Form__button" type="submit">Enviar</button>
      </form>
    )
  }
}

export default BadgeForm