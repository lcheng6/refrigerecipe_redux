import React from 'react';
import styled from 'styled-components'

import NavItem from '../nav-item'

const Toolbar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  background-color: #5C5859;
  font-family: Raleway;
  color: #EAEAEA;
`

const Header = () => {
  return(
    <Toolbar>
      <NavItem children="RFGRDX" icon="restaurant_menu" className="" />
      <NavItem children="Fridge" icon="beenhere" ml='auto' />
      <NavItem children="Recipes" icon="find_in_page" />
      <NavItem children="Cart" icon="local_grocery_store" />
      <NavItem children="My Recipes" icon="style" />
    </Toolbar>
  )
}

export default Header
