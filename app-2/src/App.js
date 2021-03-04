import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super()

    this.state ={ 
      food: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
  }
  }

render() {
  let displayedFood = this.state.food.map((e, ind) => {
    return <h2 key={ind}>{ e }</h2>
  })
  return <div className='App'>{ displayedFood }</div>
}
}

export default App;
