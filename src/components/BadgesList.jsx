import React from 'react'

import '../styles/BadgesList.css'

class BadgesList extends React.Component {
  render () {
    return (
      <ul className="BadgesList__list">
        {this.props.badges.map(badge => {
          return (
            <li className="BadgesList__item" key={badge.id}>
              <div className="BadgesList__divider">
                <img src={badge.avatarUrl} alt="Avatar" className="BadgesList__image"/>
                <div className="BadgesList__texts">
                  <h4 className="BadgesList__name">{badge.name} {badge.lastname}</h4>
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