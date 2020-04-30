import React from 'react'


import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoader from '../components/PageLoader'
import api from '../api'

import '../styles/Wrapper.css'

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
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
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({loading: false})
      this.props.history.push('/badges')
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

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({loading:true, error: null})

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({loading: false, error: null, form: data})
    } catch (error) {
      this.setState({loading: false, error})
    }
  }

  render () {
    if (this.state.loading) {
      return <PageLoader />
    }

    return (
      <React.Fragment>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center'}}>
          <Badge 
          firstName={this.state.form.firstName || 'José'}
          lastName={this.state.form.lastName || 'Cuevas'}
          jobTitle={this.state.form.jobTitle || 'Full Stack Developer'}
          twitter={this.state.form.twitter || 'josecrz13'}
          email={this.state.form.email || 'josecueram@gmail.com'} />
          <div>
            <h2 style={{textAlign: 'center'}}>Edit Attendant</h2>
            <BadgeForm 
            onSubmit={this.handleSubmit}
            onChange={this.handleChange} 
            formValues={this.state.form}
            error={this.state.error} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit