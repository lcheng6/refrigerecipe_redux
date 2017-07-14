import React from 'react';
import { NavLink, Text, Flex, Box } from 'rebass'
import styled from 'styled-components'
import {ContainerQuery} from 'react-container-query';
import classnames from 'classnames';
import Icon from '../icon'

const query = {
  'small': {
    minWidth: 0,
    maxWidth: 20
  }
};

const SmallIcon = styled(Icon)`
 font-size: 16px;
 margin-right: 5px;
`

const ResponsiveText = styled(Text)`
  &.small {
    color: red;
  }
`

const NavItem = ({className, children, icon, ml}) => {
  return(
    <NavLink ml={ml}>
      <Flex wrap>
        <Box width={1/2}>
          <SmallIcon name={icon} className="wi"/>
          <ContainerQuery query={query}>
            {(params) => (
              <ResponsiveText children={children} className={classnames(params, `${className}`)} />
            )}
          </ContainerQuery>
        </Box>
      </Flex>
    </NavLink>
  )
}

export default NavItem
