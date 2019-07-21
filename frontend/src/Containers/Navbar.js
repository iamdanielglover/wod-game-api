import React from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  
    whatToRender = () => {
        if (this.props.user) {
            return (
                <Menu>
                    <Menu.Item>Game</Menu.Item>
                    <Menu.Item onClick={() => this.props.sendHome()}>Home</Menu.Item>
                    <Menu.Item onClick={() => this.props.logOut()} position={"right"}>Logout</Menu.Item>
                </Menu>
            )
        }
        if (this.props.user === null) {
            return (
                <Menu>
                    <Menu.Item>Game</Menu.Item>
                    <Menu.Item onClick={() => this.props.sendLogin()}>Login</Menu.Item>
                    <Menu.Item onClick={() => this.props.sendSignup()}>Signup</Menu.Item>
                </Menu>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.whatToRender()}
            </React.Fragment>
        )
    }
}

export default Navbar