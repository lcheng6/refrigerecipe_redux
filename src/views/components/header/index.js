import React from 'react';
import { Toolbar } from 'rebass'
import styled from 'styled-components'

import NavItem from '../nav-item'

const Menu = styled(Toolbar)`
  background-color: #5C5859;
  font-family: Raleway;
`

const Header = () => {
  return(
    <Menu>
      <NavItem children="RFGRDX" icon="restaurant_menu" className="" />
      <NavItem children="Fridge" icon="beenhere" ml='auto' />
      <NavItem children="Recipes" icon="find_in_page" />
      <NavItem children="Cart" icon="local_grocery_store" />
      <NavItem children="My Recipes" icon="style" />
    </Menu>
  )
}

export default Header
