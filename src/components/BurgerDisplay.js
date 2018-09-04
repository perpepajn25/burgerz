import React, { Component } from 'react';

const BurgerDisplay = ({currentBurger, updateBurger}) => {

  const handleBurgerUpdate = (e) => {
    const url = `http://localhost:3001/burgers/${currentBurger.id}`
    const options = {
      method: 'PATCH',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category: e.target.value})
    }
    fetch(url, options)
    .then(resp => resp.json())
    .then(burger => {
      updateBurger(burger)
    })
  }

  return (
    <div className="BurgerDisplay">
      <img src={currentBurger.imgURL}/>
      <br/>
      <h1>{currentBurger.name}</h1>
      <br/>
      <select value={currentBurger.category} onChange={handleBurgerUpdate}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
