import React from 'react'

import { Link } from 'react-router-dom'
import Badge from '../components/Badge'

import '../styles/BadgeDetails.css'

function BadgeDetails (props) {
  const badge = props.badge
  return (
    <React.Fragment>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center'}}>
        <Badge 
          firstName={badge.firstName || 'José'}
          lastName={badge.lastName || 'Cuevas'}
          jobTitle={badge.jobTitle || 'Full Stack Developer'}
          twitter={badge.twitter || 'josecrz13'}
          email={badge.email || 'josecueram@gmail.com'} />
        <div>
          <h2 style={{textAlign: 'center'}}>Actions</h2>
          <div className="BadgeDetails__button-container">
            <Link className="BadgeDetails__button BadgeDetails__button--accept" to={`/badges/${badge.id}/edit`}>Edit</Link>
            <button className="BadgeDetails__button BadgeDetails__button--danger">Delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BadgeDetails