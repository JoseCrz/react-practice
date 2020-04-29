import React from 'react'


import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'

import '../styles/Wrapper.css'

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})

    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false})
      alert('Badge Created!')
    } catch (error) {
      this.setState({loading: false, error})
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
      <React.Fragment>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Badge 
          firstName={this.state.form.firstName || 'José'}
          lastName={this.state.form.lastName || 'Cuevas'}
          jobTitle={this.state.form.jobTitle || 'Full Stack Developer'}
          twitter={this.state.form.twitter || 'josecrz13'}
          email={this.state.form.email || 'josecueram@gmail.com'} />
          <BadgeForm 
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} 
          formValues={this.state.form} />
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew