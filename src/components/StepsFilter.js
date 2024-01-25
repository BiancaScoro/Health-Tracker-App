import React from 'react'

const StepsFilter = ({selectedFilter, setSelectedFilter}) => {
  return (
    <div className="steps-container-select">
        <select defaultValue={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value=""></option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
        </select>
    </div>
  )
}

export default StepsFilter