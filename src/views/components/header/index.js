import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 30px;
`
export default class Header extends Component {
  render() {
    return (
      <Wrapper>HEADER</Wrapper>
    )
  }
}
