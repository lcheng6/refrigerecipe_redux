import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import styled from 'styled-components'

import Container from '../../components/container'

const style = {
  backgroundColor: "blue",
  color: "white",
  margin: "10px"
}
export default class Fridge extends Component {
  render() {
    return (
      <Container className="flex vertical">
        <div >1</div>
        <div >1</div>
        <div >1</div>
        <div style={style}>1</div>
        <div style={style}>1</div>
        <div >1</div>
        <div style={style}>1</div>
        <div style={style}>1</div>
        <div style={style}>1</div>
        <div style={style}>1</div>
        <div style={style}>1</div>
      </Container>
    )
  }
}
