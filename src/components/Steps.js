import React from 'react'

const Steps = ({addStepsHandler, stepInput, setStepInput}) => {
    const onAddStepsClick = () => {
        addStepsHandler();
    }
  return (
    <section className="steps">
        <h2>Track Steps</h2>
        <div className="steps-form">
            <input type='number' placeholder="Enter Quantity" value={stepInput} onChange={(e) => setStepInput(e.target.value)} min={0}/>
            <button onClick={onAddStepsClick}>Add Steps</button> 
        </div>
    </section>
  )
}

export default Steps