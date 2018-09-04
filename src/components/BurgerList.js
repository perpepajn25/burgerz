import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = ({burgerz, handleBurgerChange, handleBurgerHide}) => {

  const burgerItems = burgerz.map(burger => {
    return <BurgerItem
              key={burger.id}
              burger={burger}
              handleBurgerChange={handleBurgerChange}
              handleBurgerHide={handleBurgerHide}
            />
  })

  return (
    <div className="BurgerList">
      {burgerItems}
    </div>
  )
}

export default BurgerList
