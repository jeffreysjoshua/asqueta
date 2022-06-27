import React, { Component } from 'react';
import louvre from "../components/assets/louvre.jpeg";
import '../App.css'


const paragraphStyle = {
  border: '1.2rem',
  borderStyle: 'solid',
  borderColor: '#0bbdbd',
  padding: '1rem',
  width: '25rem',
  color: 'black',
  fontFamily: 'avantaGarde',
}

const listStyle = {
  border: '1rem',
  borderStyle: 'solid',
  borderColor: '#0bbdbd',
  padding: '0.5rem',
  width: '25rem',
  fontFamily: 'avantaGarde',
  
}

const paragraphContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  backgroundColor:'#F5FFFA',
  alignItems: 'center',
  maxWidth: '100%'
}

const imgStyle = {
  border: '0.4rem',
  borderStyle: 'solid',
  borderColor: '#0bbdbd',
  padding: '0',
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  maxWidth: "100%",
  maxHeight: "30rem", 
  height: '40rem', 
  width: '40rem', 
  marginBottom: '1.5rem'
}

const paragraph = "Hello, we are Asqueta! We're a Nampa, ID based Glaizer company at your service. Our company specializes in doors, windows, new closures, door handles, continuous hinges, door sweeps, mohair and weatherstrips. Take a look at our commercial and residential project examples to the right 👉🏼"
class Home extends Component {
  render() {
    return (
      <>
      <div className= "homepage" style={{backgroundColor:'#F5FFFA', top:'15%', maxWidth: '100%'}}>
        <br></br>
      <h1 style={{ color: 'black', fontFamily: 'avantaGarde', backgroundColor:'#F5FFFA', height:'3.5rem', marginBottom:'0'}}>Welcome to Asqueta Glass</h1>
        <img src={louvre} style={imgStyle}/>
      </div>
      <div style={paragraphContainerStyle}>
      <p style={paragraphStyle}>{paragraph}</p>
      <ui style ={listStyle}> 
        <li> <a style={{color: 'black'}} href="/commercial">Commercial </a></li>
        <li> <a style={{color: 'black'}} href="/residential">Residential </a></li>
        <li> <a style={{color: 'black'}} href="/contactus">Contact Us </a></li>
      </ui>
      </div>
      </>
      )
  }
}
export default Home