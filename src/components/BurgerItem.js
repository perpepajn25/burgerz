import React, { Component } from 'react';

const BurgerItem = ({burger, handleBurgerChange, handleBurgerHide}) => {

  return (
    <div>
      <div className="BurgerItem">
        {burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={()=> handleBurgerChange(burger)}>Show</button>
        <button onClick={()=> handleBurgerHide(burger.id)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
