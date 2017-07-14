import React from 'react';
import { NavLink, Text, Flex } from 'rebass'
import styled from 'styled-components'
import {ContainerQuery} from 'react-container-query';
import classnames from 'classnames';
import Icon from '../icon'

const query = {
  'small': {
    minWidth: 200,
    maxWidth: 599
  }
};

const ResponsiveText = styled(Text)`

  &.small {
    display: none;
  }
`

const NavItem = ({className, children, icon, ml}) => {
  return(
    <NavLink ml={ml}>
      <Flex>
        <Icon name={icon}/>
        <ContainerQuery query={query}>
          {(params) => (
            <ResponsiveText children={children} className={classnames(params, `${className}`)} />
          )}
        </ContainerQuery>
      </Flex>
    </NavLink>
  )
}

export default NavItem
