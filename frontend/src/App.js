import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom"
import './App.css';
import { Container } from 'semantic-ui-react';
import Navbar from './Containers/Navbar'
import Home from './Pages/Home'
import Login from './auth/Login'
import Signup from './auth/Signup'
import CharacterCreation from './Pages/CharacterCreation'
import CharacterAttributes from './Pages/CharacterAttributes'

class App extends Component {
  state = {
    user_id: null,
    email: null
  }

  componentDidMount() {
    const token = localStorage.getItem("token")

    if (token) {
      fetch("http://localhost:3000/users/me", {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors)
          } else {
            this.setState({
              user_id: response._id,
              email: response.email
            })
          }
        })
    }
  }

  sendSignup = () => {
    this.props.history.push("/signup")
  }
  sendLogin = () => {
    this.props.history.push("/login")
  }
  sendHome = () => {
    this.props.history.push("/")
  }
  sendCharacterCreation = () => {
    this.props.history.push('/character-creation')
  }

  login = (response) => {
    this.setState({
      user_id: response.user._id,
      email: response.user.email
    }, () => {
      localStorage.setItem("token", response.token)
      this.props.history.push("/")
    })
  }

  logOut = () => {
    localStorage.removeItem("token")

    this.setState({
      user_id: null
    }, () => this.props.history.push("/login"))
  }

  render() {
    return (
      <React.Fragment>
        <Navbar sendSignup={this.sendSignup} sendLogin={this.sendLogin} sendHome={this.sendHome} logOut={this.logOut} user={this.state.user_id}/>
            <Container>
              <Switch>
                {this.state.user_id ? 
                  <React.Fragment>
                    <Route
                      exact path="/"
                  render={(routerProps) => <Home {...routerProps} sendCharacterCreation={this.sendCharacterCreation} />}
                    />
                    <Route
                      exact path="/character-creation"
                      render={(routerProps) => <CharacterCreation {...routerProps} />}
                    />
                    <Route
                      path="/character-attributes/:id"
                      render={(routerProps) => <CharacterAttributes {...routerProps} />}
                    />
                  </React.Fragment>
                    :
                  <React.Fragment>
                    <Route
                      path="/login"
                      render={(routerProps) => <Login {...routerProps} login={this.login} />}
                    />
                    <Route
                      path="/signup"
                      render={(routerProps) => <Signup {...routerProps} login={this.login} /> }
                    />
                  </React.Fragment>
                  }
              </Switch>
            </Container>
      </React.Fragment>
    )
  };
}

export default withRouter(App);
