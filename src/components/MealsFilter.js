import React from 'react'

const MealsFilter = ({selectedFilter, setSelectedFilter}) => {
  return (
    <div className="meals-container-select">
        <select defaultValue={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value=""></option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
        </select>
    </div>
  )
}

export default MealsFilter