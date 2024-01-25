import React from 'react'

const DeleteSteps = ({deleteAllSteps}) => {
  return (
    <div className="delete-steps">
        <button className="delete-all-btn" onClick={()=>deleteAllSteps()}>Delete All</button>
    </div>
  )
}

export default DeleteSteps