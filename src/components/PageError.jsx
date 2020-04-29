import React  from 'react'

import '../styles/PageError.css'
class PageError extends React.Component {
  render () {
  return (
    <div className="PageError">
      <h1>{this.props.error} <span role="img" aria-label="Sweaty Emoji" >🥵</span></h1>
    </div>
  )
  }
}

export default PageError