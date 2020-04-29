import React from 'react'

import '../styles/Wrapper.css'

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
      <React.Fragment>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Badge 
          name={this.state.form.name || 'José'}
          lastname={this.state.form.lastname || 'Cuevas'}
          jobTitle={this.state.form.jobTitle || 'Full Stack Developer'}
          twitter={this.state.form.twitter || 'josecrz13'}
          email={this.state.form.email || 'jose@dobletaptap.com'} />
          <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew