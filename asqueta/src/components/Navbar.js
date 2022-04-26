import React, { Component } from 'react'
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
  import '../App.css'


  const myComponentStyle = {
    backgroundColor: '#0bbdbd',
    lineHeight: 1,
    padding: '1.5rem',
    boxShadow: '0 4px 5px rgba(0, 0, 0, 0.5)',
    width:'100%',
    maxWidth:'100%',
    display: 'flex',
    justifyContent:'center',
 }

 const wordStyleBrand = {
     color: 'black',
     fontFamily: 'avantaGarde',
     transition: '0.6s',
     fontSize: '1.5rem',
     fontWeight: 'bolder',
     marginLeft:'0',
     fontStyle: 'italic'
 }

 const wordStyle = {
  color: 'black',
  fontFamily: 'avantaGarde',
  transition: '0.6s',
  fontSize: '1.3rem',
  fontWeight: 'bolder',
  marginRight:'3rem',
}

 const dropStyle = {
  color: 'black',
  fontFamily: 'avantaGarde',
  transition: '0.6s',
  fontSize: '1.3rem',
}

 const wordDropDownStyle = {
    color: 'black',
    fontFamily: 'avantaGarde',
    transition: '0.6s',
    fontSize: '1.1rem', 

}

class Example extends Component{
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
      <div>
        <Navbar style={myComponentStyle}light expand="md">
          <NavbarBrand style={wordStyleBrand} href="/">Asqueta</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className= 'nav-link' style={wordStyle} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={wordStyle} href="/aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={wordStyle} href="/contactus">Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown className= 'drop-down' style={dropStyle} nav inNavbar>
                <DropdownToggle style={wordStyle} nav caret>
                  Past Projects
                </DropdownToggle>
                <DropdownMenu style={{backgroundColor: '#F5FFFA', marginLeft: '4rem'}}right>
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
        </div>
    );
  }
}
export default Example
