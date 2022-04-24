import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


  const myComponentStyle = {
    backgroundColor: '#0bbdbd',
    lineHeight: 1,
    padding: '1.5rem',
    boxShadow: '0 4px 5px rgba(0, 0, 0, 0.5)',
 }

 const wordStyle = {
     color: 'black',
     fontFamily: 'monaco',
     transition: '0.6s',
     fontSize: '1.3rem',
     marginLeft:'2rem', 
     fontWeight: 'bold'
 }

 const dropStyle = {
  color: 'black',
  fontFamily: 'monaco',
  transition: '0.6s',
  fontSize: '1.3rem',
}

 const wordDropDownStyle = {
    color: 'black',
    fontFamily: 'monaco',
    transition: '0.6s',
    fontSize: '1.1rem', 
}

export default class Example extends React.Component {
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
        <Navbar style={myComponentStyle}light expand="md">
          <NavbarBrand style={wordStyle} href="/">Asqueta</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={wordStyle} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={wordStyle} href="/aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={wordStyle} href="/contactus">Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown className= 'dropDown' style={dropStyle} nav inNavbar>
                <DropdownToggle style={wordStyle} nav caret>
                  Past Projects
                </DropdownToggle>
                <DropdownMenu style={{backgroundColor: '#F5FFFA', marginLeft: '3rem'}}right>
                  <DropdownItem style={wordDropDownStyle} href="/commercial">
                    Commercial
                  </DropdownItem>
                  <DropdownItem style={wordDropDownStyle} href="/residential">
                    Residential
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      
    );
  }
}