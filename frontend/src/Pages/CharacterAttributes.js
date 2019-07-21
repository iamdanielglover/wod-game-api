import React, { Component, Fragment } from 'react';
import { Table, Grid, Card, Dimmer, Loader, Header } from 'semantic-ui-react';
import Options from '../Components/Options'

class CharacterAttributes extends Component {
    state = {
        character: "",
        loading: false,
        total: 0
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

        this.state.character.attributes.intelligence ? 
            this.setState({
                total: this.addUpAttributes()
            })
            :
            console.log("what?")
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
        if (this.state.total < 22) {
            this.setState({
                character: {
                    ...this.state.character,
                    attributes: {
                        ...this.state.character.attributes,
                        [event.target.name]: event.target.value
                    }
                },
                total: (this.addUpAttributes() + parseInt(event.target.value)) - parseInt(this.state.character.attributes[event.target.name])
            })
        }
    }

    addUpAttributes = () => {
        const a = this.state.character.attributes
        const total = parseInt(a.intelligence) + parseInt(a.wits) + parseInt(a.resolve) + parseInt(a.strength) + parseInt(a.dexterity) + parseInt(a.stamina) + parseInt(a.presence) + parseInt(a.manipulation) + parseInt(a.composure)
        return total
    }

    attributeCard = (attribute) => {
        return (
            <select name={attribute} onChange={this.handleChange} value={this.state.character.attributes.attribute }>
                <Options list={[{ text: 1 }, { text: 2 }, { text: 3 }, { text: 4 }, { text: 5 }]}/>
            </select>
        )
    }

    setTable = (array) => {
        return array.map((element, key) => {
            return (
                <Table.Row key={key}>
                    <Table.Cell>{element}</Table.Cell>
                    <Table.Cell textAlign={"center"}>
                        {this.attributeCard(element)}
                    </Table.Cell>
                </Table.Row>
            )
        })
    }

    secondaryRender() {
        return (
            this.state.total < 22 ?
                <Card id="char-create-card">
                    <Card.Content>
                        <Card.Header id="centered-button">
                            {this.state.character.name}
                        </Card.Header>
                        <Card.Meta>

                        </Card.Meta>
                        <Grid columns={3}>
                            <Grid.Column>
                                <Header textAlign={"center"}>Mental</Header>
                                <Table definition>
                                    <Table.Body>
                                        {this.setTable(["intelligence", "wits", "resolve"])}
                                    </Table.Body>
                                </Table>
                            </Grid.Column>

                            <Grid.Column>
                                <Header textAlign={"center"}>Physical</Header>
                                <Table definition>
                                    <Table.Body>
                                        {this.setTable(["strength", "dexterity", "stamina"])}
                                    </Table.Body>
                                </Table>
                            </Grid.Column>

                            <Grid.Column>
                                <Header textAlign={"center"}>Social</Header>
                                <Table definition>
                                    <Table.Body>
                                        {this.setTable(["presence", "manipulation", "composure"])}
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
            :
                alert('Broken')
        )
    }

    render() {
        console.log(this.state)
        return (
            <Fragment>
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