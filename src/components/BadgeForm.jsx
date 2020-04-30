import React from 'react'

import '../styles/Form.css'

class BadgeForm extends React.Component {
  
  handleClick = e => {
    console.log('Button clicked!')
    console.log(this.state)
  }

  render () {
    return (
      <form onSubmit={this.props.onSubmit} className="Form">
        <label className="Form__label">Name</label>
        <input onChange={this.props.onChange} value={this.props.formValues.firstName} className="Form__input" type="text" name="firstName" />
        <label className="Form__label">Lastname</label>
        <input onChange={this.props.onChange} value={this.props.formValues.lastName} className="Form__input" type="text" name="lastName" />
        <label className="Form__label">Email</label>
        <input onChange={this.props.onChange} value={this.props.formValues.email} className="Form__input" type="email" name="email" />
        <label className="Form__label">Job Title</label>
        <input onChange={this.props.onChange} value={this.props.formValues.jobTitle} className="Form__input" type="text" name="jobTitle" />
        <label className="Form__label">Twitter</label>
        <input onChange={this.props.onChange} value={this.props.formValues.twitter} className="Form__input" type="text" name="twitter" />
        <button onClick={this.handleClick} className="Form__button" type="submit">Enviar</button>
        {this.props.error && (
          <p>{this.props.error.message}</p>
        )}
      </form>
    )
  }
}

export default BadgeForm