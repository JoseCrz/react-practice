import React from 'react'

import '../styles/Wrapper.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  state = {
    form: {
      name: '',
      lastname: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render () {
    return (
      <div className="Wrapper">
        <Header />
        <Hero />
        <Badge name={this.state.form.name} lastname={this.state.form.lastname} jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter} email={this.state.form.email} />
        <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
      </div>
    )
  }
}

export default BadgeNew