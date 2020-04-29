import React from 'react'

import Loader  from '../components/Loader'

import '../styles/PageLoader.css'

class PageLoader extends React.Component {
  render () {
    return (
      <div className="PageLoader">
        <Loader />
      </div>
    )
  }
}

export default PageLoader