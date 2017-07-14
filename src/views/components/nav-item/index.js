import React from 'react';
import styled from 'styled-components'
import {ContainerQuery} from 'react-container-query';
import classnames from 'classnames';
import Icon from '../icon'

const query = {
  'small': {
    minWidth: 0,
    maxWidth: 99
  },
  'medium': {
    minWidth: 100,
    maxWidth: 139
  },
  'large': {
    minWidth: 140
  }
};

const SmallIcon = styled(Icon)`
 &.large {
   font-size: 1em;
   margin: 0 5px 0 15px;
   align-self: center;
 }
 &.small {
   margin: 10px;
   font-size: 1.2em;
 }
`

const ResponsiveText = styled.h2`
  width: 100%;
  font-size: 1em;
  &.medium {
    font-size: .8em;
    justify-content: center;
    vertical-align: middle;
  }
  &.small {
    display: none;
    text-align: center;
  }
`
const NavLink = styled.a`
  width: 20%;
  display: flex;
  flex-wrap: nowrap;
`

const NavItem = ({className, children, icon, ml}) => {
  return(
    <ContainerQuery query={query}>
      {(params) => (
        <NavLink className={className}>
          <SmallIcon name={icon} />
          <ResponsiveText children={children} className={classnames(params)} />
        </NavLink>
      )}
    </ContainerQuery>
  )
}

export default NavItem
