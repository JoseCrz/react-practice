import React from 'react'

import PageLoader from '../components/PageLoader'
import PageError from '../components/PageError'

import BadgeDetails from './BadgeDetails'

import api from '../api'


class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
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

  handleOpenModal = e => {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = e => {
    this.setState({modalIsOpen: false})
  }

  handleDeleteBadge = async e => {
    this.setState({loading:true, error: null})

    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({loading: false})
      this.props.history.push('/badges')
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
      <BadgeDetails badge={this.state.data}
      onDeleteBadge={this.handleDeleteBadge}
      onCloseModal={this.handleCloseModal}
      onOpenModal={this.handleOpenModal}
      modalIsOpen={this.state.modalIsOpen} />
    )
  }
}

export default BadgeDetailsContainer