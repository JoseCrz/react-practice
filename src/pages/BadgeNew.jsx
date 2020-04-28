import React from 'react'

import '../styles/Wrapper.css'

import Header from '../components/Header'
import Hero from '../components/Hero'

class BadgeNew extends React.Component {
  render () {
    return (
      <div className="Wrapper">
        <Header />
        <Hero />
        
      </div>
    )
  }
}

export default BadgeNew