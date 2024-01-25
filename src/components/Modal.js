import React from 'react'

const Modal = ({setOpenModal}) => {
  return (
    <div className="app-modal">
        <h3>Meal Name Cannot Be Empty and Calories or Steps Must Be Greater Than 0</h3>
        <button className="close-modal-btn" onClick={()=>setOpenModal(false)}>Close</button>
    </div>
  )
}

export default Modal