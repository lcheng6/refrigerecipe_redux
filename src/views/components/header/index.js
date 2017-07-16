import React from 'react';
import styled from 'styled-components'

import NavItem from '../nav-item'

const Toolbar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  background-color: #373334;
  font-family: Raleway;
  color: #EAEAEA;
`

const Header = () => {
  return(
    <Toolbar>
      <NavItem children="Sign In" icon="restaurant_menu" to="/sign-in" />
      <NavItem children="Fridge" icon="beenhere" to="/fridge" />
      <NavItem children="Recipes" icon="find_in_page" to="/recipes" />
      <NavItem children="Cart" icon="local_grocery_store" to="/cart" />
      <NavItem children="My Recipes" icon="style" to="/my-recipes" />
    </Toolbar>
  )
}

export default Header
