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
  import newlogo from "../components/assets/newlogo.png";


  const myComponentStyle = {
    backgroundColor: '#0bbdbd',
    lineHeight: 1,
    padding: '1.5rem',
    boxShadow: '0 4px 5px rgba(0, 0, 0, 0.5)',
    width:'100%',
    maxWidth:'100%',
    display: 'flex',
    justifyContent:'center',
    margin: 'auto'

 }

 const wordStyleBrand = {
     color: 'black',
     display: 'flex',
     fontFamily: 'avantaGarde',
     transition: '0.6s',
     fontSize: '1.5rem',
     fontWeight: 'bolder',
     marginLeft:'1.3rem',
     fontStyle: 'italic'
 }

 const wordStyle = {
  color: 'black',
  fontFamily: 'avantaGarde',
  transition: '0.6s',
  fontSize: '1.3rem',
  fontWeight: 'bolder',
}
const wordStyleD = {
  color: 'black',
  fontFamily: 'avantaGarde',
  transition: '0.6s',
  fontSize: '1.3rem',
  fontWeight: 'bolder',
}

 const dropStyle = {
  color: 'black',
  fontFamily: 'avantaGarde',
  transition: '0.6s',
  fontSize: '1.3rem',
  listStyleType: 'none'
}

 const wordDropDownStyle = {
    color: 'black',
    fontFamily: 'avantaGarde',
    transition: '0.6s',
    fontSize: '1.1rem', 
}

const attempt = {
  width: '100%',
  justifyContent: 'spaceBetween'
}

const logoStyle = {
  border: '0.2rem',
  borderStyle: 'solid',
  borderColor: 'black',
  width: '11rem',
  padding: '0.625rem',
  color: '#2F4F4F',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
}

const divStyle = {
  
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
          <img src={newlogo} href="/" style={logoStyle} Asqueta />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={attempt} navbar>
              <NavItem>
                <NavLink className= 'nav-link' style={wordStyle} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={wordStyle} href="/aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={wordStyle} href="/contactus">Contact Us</NavLink>
              </NavItem>
              </Nav>
              <UncontrolledDropdown className= 'drop-down' style={dropStyle} nav inNavbar>
                <DropdownToggle style={wordStyleD} nav caret>
                  Past Projects
                </DropdownToggle>
                <DropdownMenu style={{backgroundColor: '#F5FFFA'}}right>
                  <DropdownItem style={wordDropDownStyle} href="/commercial">
                    Commercial
                  </DropdownItem>
                  <DropdownItem style={wordDropDownStyle} href="/residential">
                    Residential
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Collapse>
        </Navbar>
        </div>
    );
  }
}
export default Example
