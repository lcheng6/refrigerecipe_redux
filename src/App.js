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

const Container = styled.body`
  width: 100%;
  background-color: yellow;
  height: 100vh;
`
class App extends Component {
  render() {
    return (
      <Container>
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/fridge" component={Fridge} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/my-recipes" component={MyRecipes} />
          <Route path="/cart" component={Cart} />
          <Route path="/sign-in" component={SignIn} />
        <Footer />
      </Container>
    )
  }
}

export default App
