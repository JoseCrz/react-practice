import React from 'react'
import { Link } from 'react-router-dom'

import Gravatar from '../components/Gravatar'

import '../styles/BadgesList.css'
import '../styles/Form.css'

function useSearchBadges (badges) {
  
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)
  
  React.useMemo(() => {
    const results = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })
    
    setFilteredBadges(results)
  }, [badges, query])
  
  return {query, setQuery, filteredBadges}
}

function BadgesList (props) {
  const badges = props.badges
  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="Form">
          <label htmlFor="" className="Form__label">Filter them Badges</label>
          <input className="Form__input" type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }} />
        </div> 
        <h3>We couldn't find any badges</h3>
        <p>Why don't you try creating a new one?</p>
        <Link className="Badges__button" to="/badges/new">Create my first Badge</Link>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className="Form">
        <label htmlFor="" className="Form__label">Filter them Badges</label>
        <input className="Form__input" type="text"
        value={query}
        onChange={e => {
          setQuery(e.target.value)
        }} />
      </div> 
      <ul className="BadgesList__list">
        {filteredBadges.map(badge => {
          return (
            <li className="BadgesList__item" key={badge.id}>
              <Link to={`/badges/${badge.id}`} className="BadgesList__link">
                <div className="BadgesList__divider">
                  <Gravatar email={badge.email} alt="Avatar" className="BadgesList__image"/>
                  <div className="BadgesList__texts">
                    <h4 className="BadgesList__name">{badge.firstName} {badge.lastName}</h4>
                    <p className="BadgesList__twitter" to="https://twitter.com/">@{badge.twitter}</p>
                    <p className="BadgesList__job">{badge.jobTitle}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default BadgesList