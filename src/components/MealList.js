import React from 'react'

const MealList = ({meals, deleteMealHandler}) => {

  return (
    <div className="meal-list-container-wrapper">
        {meals?.map((meal, index) => (
            <div key={index} className="meal-list-container-wrapper-inner">
                <div className="meal-calories">{`${meal.mealName} : ${meal.calories}`}</div>
                <div className="gap">
                    <button className="delete-meal-btn" onClick={()=>deleteMealHandler(meal.id)}>Delete</button>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default MealList