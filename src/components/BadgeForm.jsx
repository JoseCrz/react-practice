import React from 'react'

import '../styles/Form.css'

class BadgeForm extends React.Component {
  state = {
    name: '',
    lastname: '',
    email: '',
    jobTitle: '',
    twitter: ''
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    console.log('Button clicked!')
    console.log(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <label className="Form__label">Name</label>
        <input onChange={this.handleChange} value={this.state.name} className="Form__input" type="text" name="name" />
        <label className="Form__label">Lastname</label>
        <input onChange={this.handleChange} value={this.state.lastname} className="Form__input" type="text" name="lastname" />
        <label className="Form__label">Email</label>
        <input onChange={this.handleChange} value={this.state.email} className="Form__input" type="email" name="email" />
        <label className="Form__label">Job Title</label>
        <input onChange={this.handleChange} value={this.state.jobTitle} className="Form__input" type="text" name="jobTitle" />
        <label className="Form__label">Twitter</label>
        <input onChange={this.handleChange} value={this.state.twitter} className="Form__input" type="text" name="twitter" />
        <button onClick={this.handleClick} className="Form__button" type="submit">Enviar</button>
      </form>
    )
  }
}

export default BadgeForm