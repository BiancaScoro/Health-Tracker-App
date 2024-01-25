import React from 'react'

const DeleteMeals = ({ deleteAllMeals }) => {
  return (
    <div className="delete-meals">
        <button className="btn-delete-all" onClick={()=>deleteAllMeals()}>
            Delete All
        </button>
    </div>
  )
}

export default DeleteMeals