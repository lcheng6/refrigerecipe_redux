import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import styled from 'styled-components'

import Container from '../../components/container'
import IngredientItem from '../../components/c-ingredient-item'
const style = {
  backgroundColor: "blue",
  color: "white",
  margin: "10px"
}
export default class Fridge extends Component {
  render() {
    return (
      <Container className="flex vertical">
        <IngredientItem />
      </Container>
    )
  }
}
