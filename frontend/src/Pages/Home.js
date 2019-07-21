import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

class Home extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>
                        Home page!
                    </h1>
                    <Card>
                        <Card.Content>
                            Create Character

                        </Card.Content>
                        <Button onClick={() => this.props.sendCharacterCreation()}>create</Button>
                    </Card>
                    <Card>
                        <Card.Content>
                            View Characters
                        </Card.Content>
                        <Button>View</Button>
                    </Card>
                    <Card>
                        <Card.Content>
                            View Merits
                        </Card.Content>
                        <Button>Button</Button>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default Home