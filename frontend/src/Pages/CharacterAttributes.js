import React, { Component, Fragment } from 'react';
import { Table, Grid, Card, Dimmer, Loader, Header, Button } from 'semantic-ui-react';
import characterPost from '../Utils/CharacterPost';

class CharacterAttributes extends Component {
    state = {
        character: "",
        loading: false,
        mental: 3,
        physical: 3,
        social: 3,
        five: false,
        four: false,
        three: false
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await characterPost(this.state.character.attributes, `http://localhost:3000/characters/${this.props.match.params.id}/attributes`, localStorage.getItem('token'))
        this.props.history.push(`/character-skills/${this.props.match.params.id}`)
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:3000/characters/' + this.props.match.params.id, {
            headers: { "Authorization": localStorage.getItem('token') }
        })
        const json = await response.json()
        this.setState({
            character: json,
            loading: true,
        })
    }

    handleClick = (event) => {
        this.setState({
            character: {
                ...this.state.character,
                [event.target.name]: event.target.value
            }
        })
    }

    handleChange = (event) => {
        if (parseInt(event.target.value) === 3) {
                this.setState({
                    [event.target.name]: parseInt(event.target.value),
                    three: !this.state.three
                })
        } else if (parseInt(event.target.value) === 4) {
            this.setState({
                [event.target.name]: parseInt(event.target.value),
                four: !this.state.four
            })
        } else if (parseInt(event.target.value) === 5) {
            this.setState({
                [event.target.name]: parseInt(event.target.value),
                five: !this.state.five
            })
        } else {
            console.log('nope')
        }
    }

    spentPoints = (array) => {
        const a = this.state.character.attributes
        let total = 0
        Object.keys(a).forEach(key => {
            if (array.includes(key)) {
                total += a[key]
            } else {
                return;
            }
        })
        return total 
    }
    
    setTable = (array, bool) => {
        return array.map((element, key) => {
            return (
                <Table.Row key={key}>
                    <Table.Cell>{element}</Table.Cell>
                    <Table.Cell textAlign={"center"}>
                        {this.displayDots(this.state.character.attributes[element])}
                    </Table.Cell>
                    {
                        this.state.character.attributes[element] === 5 ?
                            <Table.Cell>
                                <Button disabled={bool} size={"mini"} name={element} onClick={() => this.btnDec(element)}>-</Button>
                            </Table.Cell>
                        :
                            <Table.Cell>
                                <Button disabled={bool} size={"mini"} name={element} onClick={() => this.btnInc(element)}>+</Button>
                                <Button disabled={false} size={"mini"} name={element} onClick={() => this.btnDec(element)}>-</Button>
                            </Table.Cell>
                    }
                </Table.Row>
            )
        })
    }
    
    displayDots = (attribute) => {
        let count = attribute
        const arr = []
        do {
            arr.push(this.dot)
            count--
        } while (count > 0)
        return arr.map((i, key) => i(key) )
    }
    
    dot(key) {
        return (
            <span key={key} className="dot"></span>
            )
        }
        
    btnInc = (element) => {
        this.setState({
            character: {
                ...this.state.character,
                attributes: {
                    ...this.state.character.attributes,
                    [element]: parseInt(this.state.character.attributes[element]) + 1
                }   
            }
        })
    }

    btnDec = (element) => {
        if (this.state.character.attributes[element] > 1) {
            this.setState({
                character: {
                    ...this.state.character,
                    attributes: {
                        ...this.state.character.attributes,
                        [element]: parseInt(this.state.character.attributes[element]) - 1
                    }
                }
            })
        }
    }
    
    secondaryRender() {
        return (
            <Card id="char-attributes-card">
                <Card.Content>
                    <Card.Header id="centered-button">
                        {this.state.character.name}
                    </Card.Header>
                    <Grid columns={3}>
                            <Grid.Column>
                                <Header textAlign={"center"}>Mental</Header>
                                <Table definition>
                                    <Table.Body>
                                        {this.state.mental + 3 > this.spentPoints(["intelligence", "wits", "resolve"]) ? 
                                            this.setTable(["intelligence", "wits", "resolve"], false)
                                            :
                                            this.setTable(["intelligence", "wits", "resolve"], true)
                                        }                           
                                    </Table.Body>
                                </Table>
                                <div id="centered-button">
                                    <Button disabled={this.state.five} name="mental" value={5} onClick={this.handleChange}>5</Button>
                                    <Button disabled={this.state.four} name="mental" value={4} onClick={this.handleChange}>4</Button>
                                    <Button disabled={this.state.three} name="mental" value={3} onClick={this.handleChange}>3</Button>
                                </div>
                            </Grid.Column>

                        <Grid.Column>
                            <Header textAlign={"center"}>Physical</Header>
                            <Table definition>
                                <Table.Body>
                                    {(this.state.physical + 3) > this.spentPoints(["strength", "dexterity", "stamina"]) ? 
                                        this.setTable(["strength", "dexterity", "stamina"], false)
                                        :    
                                        this.setTable(["strength", "dexterity", "stamina"], true)
                                    }
                                </Table.Body>
                            </Table>
                            <div id="centered-button">
                                <Button disabled={this.state.five} name="physical" value={5} onClick={this.handleChange}>5</Button>
                                <Button disabled={this.state.four} name="physical" value={4} onClick={this.handleChange}>4</Button>
                                <Button disabled={this.state.three} name="physical" value={3} onClick={this.handleChange}>3</Button>
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <Header textAlign={"center"}>Social</Header>
                            <Table definition>
                                <Table.Body>
                                    {this.state.social + 3 > this.spentPoints(["presence", "manipulation", "composure"]) ?
                                        this.setTable(["presence", "manipulation", "composure"], false)
                                            :    
                                        this.setTable(["presence", "manipulation", "composure"], true)
                                    }
                                </Table.Body>
                            </Table>
                            <div id="centered-button">
                                <Button disabled={this.state.five} name="social" value={5} onClick={this.handleChange}>5</Button>
                                <Button disabled={this.state.four} name="social" value={4} onClick={this.handleChange}>4</Button>
                                <Button disabled={this.state.three} name="social" value={3} onClick={this.handleChange}>3</Button>
                            </div>
                        </Grid.Column>
                    </Grid>
                    <div id="centered-button"><Button onClick={this.handleSubmit}>Finished</Button></div>
                </Card.Content>
            </Card>
        ) 
    }

    render() {
        console.log(this.state)
        return (
            <Fragment>
                <Card centered id="attribute-explanation">
                    <Card.Content>
                        <Card.Header>Distributing Attributes</Card.Header>
                        <Card.Description>
                            Your character starts with 1 dot in every attribute, because every human has at least the most basic level of these attributes. They are grouped into 3 categories by column: Mental, Physical, and Social (self-explanatory). You get to assign 5 dots to one category (mental/physical/social), 4 to another, and 3 to the last. <br /><br />So for instance if you chose Mental category for your 3 dots, you could distribute those 3 as you like among the attributes of Intelligence, Wits, and Resolve.<br /><br /> Generally, one dot in an attribute denotes ineptness, worse than the average person. Two would be average human level.
                            </Card.Description>
                    </Card.Content>
                </Card>
                {!this.state.loading ? 
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                    :
                    this.secondaryRender()
                }
            </Fragment>
        )
    }
}

export default CharacterAttributes