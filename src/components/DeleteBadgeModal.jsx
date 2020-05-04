import React from 'react'
import Modal from './Modal'

function DeleteBadgeModal (props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you about this?</h1>
        <p>There's no turning back from this</p>
        <div>
          <button onClick={props.onDeleteBadge} >Delete</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal