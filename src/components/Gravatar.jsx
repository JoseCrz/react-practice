import React from 'react'
import md5  from 'md5'

class Gravatar extends React.Component {
  render () {
    const id = md5(this.props.email)
    
    return (
      <img className={this.props.className} src={`https://www.gravatar.com/avatar/${id}?d=identicon`} alt="Avatar"/>
    )
  }
}

export default Gravatar