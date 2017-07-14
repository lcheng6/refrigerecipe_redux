import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Fridge from './views/pages/fridge'
import Recipes from './views/pages/recipes'
import MyRecipes from './views/pages/my-recipes'
import Cart from './views/pages/cart'
import SignIn from './views/pages/sign-in'
import Home from './views/pages/home'

import Header from './views/components/header'
import Footer from './views/components/footer'

import { Provider } from 'rebass'

const theme = {
  breakpoints: [
  // min-width breakpoints in ems
  40, 52, 64
  ],
  space: [
    0, 6, 12, 18, 24, 30, 36
  ],
  fontSizes: [
    12, 16, 18, 24, 36, 48, 72
  ],
  weights: [
    400, 600
  ],
  colors: {
    black: '#111',
    white: '#fff',
    blue: '#07c'
  },
  font: 'Josefin Slab',
  monospace: '"Roboto Mono", Menlo, monospace',
  radius: 2
}


class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/fridge" component={Fridge} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/my-recipes" component={MyRecipes} />
        <Route path="/cart" component={Cart} />
        <Route path="/sign-in" component={SignIn} />
        <Footer />
      </Provider>
    )
  }
}

export default App
