import React from 'react'
import { Link } from 'react-router-dom'


import BadgesList from '../components/BadgesList'

import logo from '../images/logo.svg'

import '../styles/Wrapper.css'
import '../styles/Badges.css'

class Badges extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({
        data:[
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            name: 'Freda',
            lastname: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            name: 'Major',
            lastname: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            name: 'Daphney',
            lastname: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      })
    }, 3000)
  }

  componentWillUnmount () {
    clearTimeout(this.timeoutId)
  }
  render () {
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
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges