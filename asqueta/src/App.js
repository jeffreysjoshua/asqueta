import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollTo from './components/ScrollTo'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Commercial from './pages/Commercial'
import Residential from './pages/Residential'
import NotFound from './pages/NotFound'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      
      <Router>
        <Navbar />      
        <Switch >       
          <Route exact path ="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/commercial" component={Commercial} />
          <Route path="/residential" component={Residential} />
          <Route component={NotFound}/>        
        </Switch>
        <ScrollTo />
        <Footer />
      </Router>
      
    )
  }
}

export default App
