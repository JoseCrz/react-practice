import React from 'react'

import PageLoader from '../components/PageLoader'
import PageError from '../components/PageError'

import BadgeDetails from './BadgeDetails'

import api from '../api'


class BadgeDetailsContainer extends React.Component {
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
      <BadgeDetails badge={this.state.data} />
    )
  }
}

export default BadgeDetailsContainer