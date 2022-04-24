import React, { Component } from 'react'
import logo from "../components/assets/logo.png";

const footerStyle = {
  border: '0.2rem',
  borderStyle: 'solid',
  borderColor: '#008080',
  width: '11rem',
  padding: '0.625rem',
  color: '#2F4F4F',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
}

class Footer extends Component{
  render(){
    return(
      <div style={{backgroundColor:'#0bbdbd'}}>
        <img src={logo} style={footerStyle}/>
      </div>
    )
  }
}

export default Footer