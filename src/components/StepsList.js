import React from 'react'

const StepsList = ({steps, deleteStepsHandler}) => {
    const stepsArray = Array.isArray(steps) ? steps : [];
  return (
    <div className="steps-list-container-wrapper">
        {stepsArray.map((step, index) => (
            <div key={index} className="steps-list-container-wrapper-inner">
              <div className="steps-list">{`${step.step}`}</div>  
              <div className="gap">
              <button className="delete-steps-btn" onClick={() => deleteStepsHandler(step.id)}>Delete</button>
              </div>
            </div>
        ))}
    </div>
  )
}

export default StepsList;