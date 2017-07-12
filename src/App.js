import React, { Component } from 'react'
import { Route } from 'react-router-dom'

let Fridge = () => {
  return (<div>Fridge</div>)
}

class App extends Component {
  render() {
    return (
      <div>
        Ola
        <Route path="/fridge" compontent={Fridge} />
      </div>
    )
  }
}

export default App
