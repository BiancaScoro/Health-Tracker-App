import React from 'react'

const Calories = ({addMealsHandler, mealName, calories, setCalories, setMealName}) => {
    const onAddMealsClick = () => {
        addMealsHandler();
    }
  return (
    <section className="calories">
        <h1>Hello, <span>Emma</span></h1>
        <h2>Track Calories</h2>
        <div className="calories-form">
            <input type="text" placeholder="Enter Meal" value={mealName} onChange={(e) => setMealName(e.target.value)}/>
            <input type="number" placeholder="Enter Quantity" value={calories} onChange={(e) => setCalories(e.target.value)} min={0}/>
            <button onClick={onAddMealsClick}>Add Meal</button>
        </div>
    </section>
  )
}

export default Calories