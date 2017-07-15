import React from 'react';
import { NavLink } from 'react-router-dom'
// local
import Icon from '../icon'
// styles
import styled from 'styled-components'
import {ContainerQuery} from 'react-container-query';
import classnames from 'classnames';

const query = {
  'small': {
    minWidth: 0,
    maxWidth: 109
  },
  'medium': {
    minWidth: 110,
    maxWidth: 139
  },
  'large': {
    minWidth: 140
  }
};

const SmallIcon = styled(Icon)`
 &.large {
   font-size: 1em;
   margin: auto 5px auto 15px;
 }
 &.medium {
   margin: auto 5px auto 15px;
   font-size: 1em;
 }
 &.small {
   margin: 10px auto;
   font-size: 1.2em;
 }
`

const ResponsiveText = styled.p`
  width: 100%;
  font-size: 1em;
  &.medium {
    font-size: .8em;
    vertical-align: middle;
  }
  &.small {
    display: none;
  }
`
const Item = styled(NavLink)`
  width: 20%;
  display: flex;
  flex-wrap: nowrap;
  ${'' /* color: #D8D8D8; */}
  color: #818181;
  text-decoration: none;
  &.selected {
    color: white;
  }
`

const NavItem = ({ className, children, icon, to }) => {
  return(
    <ContainerQuery query={query}>
      {(params) => (
        <Item to={to} activeClassName="selected">
          <SmallIcon name={icon} className={classnames(params)} />
          <ResponsiveText
            children={children}
            className={classnames(params)}
          />
        </Item>
      )}
    </ContainerQuery>
  )
}

export default NavItem
