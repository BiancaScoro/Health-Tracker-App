import React from 'react'

const MealsCounter = ({total}) => {
  return (
    <div className="meals-counter">
        <h2>
            Total Calories <span>{total}</span>
        </h2>
    </div>
  )
}

export default MealsCounter