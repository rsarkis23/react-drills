import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      food: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      message: ''
    }
  }
  handleChange(filter) {
    this.setState({ message: filter  })
  }



  render() {
    let foodsToDisplay = this.state.food.filter((element, index) => {
      return element.includes(this.state.message)
    }).map((element, index) => {
      return <h2 key={index}>{ element }</h2>
    })
    return (
      <div className='App'>
        <input onChange = {e => this.handleChange(e.target.value)} type='text' />
        { foodsToDisplay }
      </div>
    )
  }

}

export default App;
