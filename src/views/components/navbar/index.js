import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'
import { NavLink as RrNavLink } from 'react-router-dom'
import Container from '../layout/full-width'

const Wrapper = styled.div`
width: 100%;
background-color: #F7F7F7;
margin-bottom: 20px;
`
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand tag={RrNavLink} to="/">RFGRDX</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              {this.props.authenticated ?
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink onClick={this.props.signOut}>Sign Out</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RrNavLink} to="/fridge">My Fridge</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RrNavLink} to="/get-recipes">Get Recipes</NavLink>
                  </NavItem>
                </Nav>
              : null}
            </Collapse>
          </Navbar>
        </Container>
      </Wrapper>
    );
  }
}
