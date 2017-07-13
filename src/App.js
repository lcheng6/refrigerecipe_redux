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

import styled from 'styled-components'
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
    6, 8, 10, 14, 18, 22, 28
  ],
  weights: [
    400, 600
  ],
  colors: {
    black: '#111',
    white: '#fff',
    blue: '#07c'
  },
  font: 'Raleway',
  monospace: '"Roboto Mono", Menlo, monospace',
  radius: 2
}

// Josefin+Slab|Niconne|Raleway

const Container = styled.div`
  width: 100%;
  height: 100vh;
`
class App extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    )
  }
}

export default App
