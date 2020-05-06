import React, { Component } from 'react';
import{BrowserRouter as Router , Route , Link} from 'react-router-dom'
import {Container,Nav,Navbar} from 'react-bootstrap'
import Div from './Div'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'



class App extends Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Div/>
        <Footer/>
      </div>
    );
  }
}

export default App;
