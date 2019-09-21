import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../logo.svg';

export default class NavBar extends Component {
  render() {
    return (
      <Nav>
        <NavItem>
          <NavLink href='#'>
            <img src={logo} className='' alt='block one logo' />
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
