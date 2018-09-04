import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filter: 'All'
  }

  handleFilterChange = (e) => {
    console.log(e.target.value)
    this.setState({
      filter: e.target.value
    })
  }

  filteredBurgerz = () => {
    if (this.state.filter === "All") {
      return this.props.burgerz
    } else {
      return this.props.burgerz.filter((burger)=> {
        return burger.category === this.state.filter
      })
    }
  }

  render(){
    console.log(this.props.burgerz)
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleFilterChange={this.handleFilterChange} selectedFilter={this.state.filter}/>
        <BurgerList burgerz={this.filteredBurgerz()}
          handleBurgerChange={this.props.handleBurgerChange}
          handleBurgerHide={this.props.handleBurgerHide}
        />
      </div>
    )
  }
}
