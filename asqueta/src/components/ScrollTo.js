import React, { Component } from 'react'
import uparrow from "../components/assets/uparrow.png";

const scrollArrowStyle = {
    maxWidth: '2.3rem',
    maxHeight: '2.3rem',
    backgroundColor:'#F5FFFA',
    cursor: 'pointer',
    marginTop: '1rem',
    position: 'relative',
    right: '0.5%',
    marginBottom: '0.5rem'
}

class ScrollTo extends Component{
  render(){
    return(
      <>
        <div style={{backgroundColor:'#F5FFFA'}}onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <i>
        <img style={scrollArrowStyle} src={uparrow} />
        </i>
            </div>
      </>
    )
  }
}

export default ScrollTo
