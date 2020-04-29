import React from 'react'
import { Link } from 'react-router-dom'

import Gravatar from '../components/Gravatar'

import '../styles/BadgesList.css'

class BadgesList extends React.Component {
  render () {
    if (this.props.badges.length === 0) {
      return (
        <React.Fragment>
          <h3>We couldn't find any badges</h3>
          <p>Why don't you try creating a new one?</p>
          <Link className="Badges__button" to="/badges/new">Create my first Badge</Link>
        </React.Fragment>
      )
    }
    return (
      <ul className="BadgesList__list">
        {this.props.badges.map(badge => {
          return (
            <li className="BadgesList__item" key={badge.id}>
              <div className="BadgesList__divider">
                <Gravatar email={badge.email} alt="Avatar" className="BadgesList__image"/>
                <div className="BadgesList__texts">
                  <h4 className="BadgesList__name">{badge.firstName} {badge.lastName}</h4>
                  <a className="BadgesList__twitter" href="https://twitter.com/">@{badge.twitter}</a>
                  <p className="BadgesList__job">{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList