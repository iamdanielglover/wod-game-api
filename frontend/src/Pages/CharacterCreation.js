import React, { Component } from 'react'
import { Form, Grid, TextArea, Card, Table, Label, Button } from 'semantic-ui-react'
import Options from '../Components/Options'
import {vices, virtues} from '../Utils/viceandvirtues'
import characterPost from '../Utils/CharacterPost'
import '../Styles/general.css'

class CharacterCreation extends Component {
    state = {
        name: "",
        age: 0,
        concept: "",
        virtue: "charity",
        vice: "envy",
        faction: "",
        size: 5,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = async (event) => {
        event.preventDefault()
        const word = await characterPost(this.state, 'http://localhost:3000/characters', localStorage.getItem("token"))
        this.props.history.push(`/character-attributes/${word._id}`)
    }

    render() {
        return (
            <Card id="char-create-card">
                <Card.Content id="char-create-card-content">
                    <Grid columns={2}>
                        <Grid.Column>
                            <Table compact definition>
                                <Table.Body>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Form>
                                                <Form.Input label='Name' placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                                                <Form.Input label="Age" placeholder="Age" name="age" type="number" min={0} max={400} value={this.state.age} onChange={this.handleChange} />
                                            </Form>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Label>Size</Label>
                                            <select id="char-create-select" name="size" placeholder="Size" value={this.state.size} onChange={this.handleChange}>
                                                <Options list={[{ text: 3 }, { text: 4 }, { text: 5 }, { text: 6 }, { text: 7 }, { text: 8 }]} />
                                            </select>
                                        </Table.Cell> 
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Label>Faction</Label>
                                            <Form id="char-create-formtype">
                                                <Form.Input placeholder="Faction, if any..." name="faction" value={this.state.faction} onChange={this.handleChange} />
                                            </Form>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>

                        <Grid.Column>
                            <Table compact definition>
                                <Table.Body>

                                    <Table.Row>
                                        <Table.Cell>
                                        <Label>Vice</Label>
                                            <select id="char-create-select" name="vice" placeholder="Vice" value={this.state.vice} onChange={this.handleChange}>
                                                <Options list={vices} />
                                            </select>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                        <Label>Virtue</Label>
                                            <select id="char-create-select" name="virtue" placeholder="Virtue" value={this.state.virtue} onChange={this.handleChange}>
                                                <Options list={virtues} />
                                            </select>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                        <Label>Concept</Label>
                                            <Form id="char-create-textarea">
                                                <TextArea maxLength={100} name="concept" placeholder='Character Concept' value={this.state.concept} onChange={this.handleChange} />
                                            </Form>
                                        </Table.Cell>
                                    </Table.Row>

                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid>
                    <div id="centered-button">
                        <Button onClick={this.handleSubmit}>Create Character</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

export default CharacterCreation