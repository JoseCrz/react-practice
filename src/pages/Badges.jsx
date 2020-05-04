import React from 'react'
import { Link } from 'react-router-dom'

import PageLoader from '../components/PageLoader'
import MiniLoader from '../components/MiniLoader'
import PageError from '../components/PageError'
import BadgesList from '../components/BadgesList'
import api from '../api'

import logo from '../images/logo.svg'
import '../styles/Wrapper.css'
import '../styles/Badges.css'

class Badges extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount () {
    this.fetchData()
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try {
      const data = await api.badges.list()
      this.setState({loading: false, data, error: null})
    } catch (error) {
      this.setState({loading:false, error})
    }
  }

  render () {
    if (this.state.loading && !this.state.data) {
      return <PageLoader />
    }

    if (this.state.error) {
      return <PageError error={this.state.error.message} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Wrapper">
              <img src={logo} alt="" className="Badges__hero-image"/>
            </div>
          </div>
          <div className="Wrapper">
            <div className="Badges__buttons-container">
              <Link to="/badges/new" className="Badges__button">New Badge</Link>
            </div>
            <div className="Wrapper Wrapper--mini">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges