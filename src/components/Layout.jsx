import React from 'react'

import Header from './Header'
import Footer from './Footer'

import '../styles/Wrapper.css'

function Layout (props) {
  return (
    <div className="Wrapper">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout