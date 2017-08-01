import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import { NavLink as RrNavLink } from 'react-router-dom';
import Container from '../layout/full-width';

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
                    <NavLink tag={RrNavLink} to="/get-recipes">
                      <i className="download outline icon"/>
                      Get Recipes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RrNavLink} to="/saved-recipes">
                      <i className="like outline icon"/>
                      Saved Recipes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RrNavLink} to="/shopping-list">
                      <i className="shop icon"/>
                      Cart
                    </NavLink>
                  </NavItem>
                  <NavItem style={{cursor: "pointer"}} >
                    <NavLink onClick={this.props.signOut}>
                      <i className="sign out icon"/>
                      Sign Out
                    </NavLink>
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
