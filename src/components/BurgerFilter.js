import React, { Component } from 'react';

const BurgerFilter = (props) => {
  return (
    <div className="BurgerFilter">
      <select value={props.selectedFilter} onChange={props.handleFilterChange}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
