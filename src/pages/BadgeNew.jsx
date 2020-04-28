import React from 'react'

import '../styles/Wrapper.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
  render () {
    return (
      <div className="Wrapper">
        <Header />
        <Hero />
        <Badge name="Memo" lastname="Poblete" jobTitle="Designer" twitter="memopoblete" />
      </div>
    )
  }
}

export default BadgeNew