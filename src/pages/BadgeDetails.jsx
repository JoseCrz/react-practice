import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import PageLoader from '../components/PageLoader'
import PageError from '../components/PageError'

import api from '../api'

import '../styles/BadgeDetails.css'

class PageDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({loading: true, error: null})
    
    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({loading: false, data})

    } catch (error) {
      this.setState({loading: false, error})
    }
  }
  
  render() {
    if (this.state.loading) {
      return <PageLoader />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }
    return (
      <React.Fragment>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center'}}>
          <Badge 
            firstName={this.state.data.firstName || 'José'}
            lastName={this.state.data.lastName || 'Cuevas'}
            jobTitle={this.state.data.jobTitle || 'Full Stack Developer'}
            twitter={this.state.data.twitter || 'josecrz13'}
            email={this.state.data.email || 'josecueram@gmail.com'} />
          <div>
            <h2 style={{textAlign: 'center'}}>Actions</h2>
            <div className="BadgeDetails__button-container">
              <Link className="BadgeDetails__button BadgeDetails__button--accept" to={`/badges/${this.props.match.params.badgeId}/edit`}>Edit</Link>
              <button className="BadgeDetails__button BadgeDetails__button--danger">Delete</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PageDetails