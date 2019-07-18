import React from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu>
                    <Menu.Item>
                        Home
                    </Menu.Item>
                </Menu>
            </React.Fragment>
        )
    }
}

export default Navbar