import React, { Component } from 'react';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgerz: [],
    currentBurger: {}
  }

  componentDidMount () {
    fetch('http://localhost:3001/burgers')
    .then(resp => resp.json())
    .then(burgerz => {
      this.setState({
        burgerz,
        currentBurger: burgerz[0]
      })
    })
  }

  handleBurgerChange = (burger) => {
    this.setState({
      currentBurger: burger
    })
  }

  updateBurger = (burger) => {
    this.setState((prevState) => {
      const updatedBurgers = prevState.burgerz.map( b => {
        return b.id === burger.id ? burger : b
        })
      return {
        burgerz: updatedBurgers,
        currentBurger: burger
      }
    })
  }

  handleBurgerHide = (burgerId) => {
    this.setState(prevState => {
      const availableBurgerz = prevState.burgerz.filter(burger => {
        return burger.id !== burgerId
      })
      return {
        burgerz: availableBurgerz
      }
    })
  }


  render() {
    return (
      <div id="App">
        <BurgerContainer
          handleBurgerChange={this.handleBurgerChange}
          burgerz={this.state.burgerz}
          handleBurgerHide={this.handleBurgerHide}
        />
        <BurgerDisplay currentBurger={this.state.currentBurger} updateBurger={this.updateBurger}/>
      </div>
    );
  }
}

export default App;
