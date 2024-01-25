import React from 'react'

const StepsCounter = ({totalSteps}) => {
  return (
    <div className="steps-counter">
        <h2>
        Total Steps <span>{totalSteps}</span>
        </h2>
    </div>
  )
}

export default StepsCounter