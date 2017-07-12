import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Header extends Component {
  render() { return <div>HEADER</div> }
}
class Footer extends Component {
  render() { return <div>FOOTER</div> }
}
class Fridge extends Component {
  render() { return <div>This is the fridge</div> }
}
class Recipes extends Component {
  render() { return <div>These are the recipes</div> }
}
class MyRecipes extends Component {
  render() { return <div>These are MY SAVED recipes</div> }
}
class Cart extends Component {
  render() { return <div>This is the Shopping Cart</div> }
}
class SignIn extends Component {
  render() { return <div>Sign in HERE</div> }
}


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/fridge" component={Fridge} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/my-recipes" component={MyRecipes} />
        <Route path="/cart" component={Cart} />
        <Route path="/sign-in" component={SignIn} />
        <Footer />
      </div>
    )
  }
}

export default App
