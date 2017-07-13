import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Toolbar, NavLink } from 'rebass'
import { ContainerQuery } from 'react-container-query'
import classnames from 'classnames'

const query = {
  'font-sm': {
    minWidth: 250,
    maxWidth: 599,
  },
  'font-lg': {
    minWidth: 600,
  },
};

const Menu = styled(Toolbar)`
  background-color: #5C5859;
`

const Header = () => {
  return (
    <Menu>
    	<NavLink
        fontSize={[1, 2, 3]}
        to='/'
        is={Link}
        children='Refrigerecipe'
      />
      <NavLink
        fontSize={[1, 2, 3]}
        ml='auto'
        to='/fridge'
        is={Link}
        children='Fridge'
      />
      <NavLink
        fontSize={[1, 2, 3]}
        to='/recipes'
        is={Link}
        children='Recipes'
      />
      <NavLink
        fontSize={[1, 2, 3]}
        to='/my-recipes'
        is={Link}
        children='My Recipes'
      />
      <NavLink
        fontSize={[1, 2, 3]}
        to='/cart'
        is={Link}
        children='Cart'
      />
      <NavLink
        fontSize={[1, 2, 3]}
        to='/sign-in'
        is={Link}
        children='Sign In'
      />

    </Menu>
  )
}

export default Header
