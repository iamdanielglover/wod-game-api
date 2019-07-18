import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom"
import './App.css';
import { Container } from 'semantic-ui-react';
import Navbar from './Containers/Navbar'
import Home from './Pages/Home'

class App extends Component {
  
  
  render() {
    return (
      <React.Fragment>
          <Navbar />
            <Container>
                <Home/>
            </Container>
      </React.Fragment>
    )
  };
}

export default App;
