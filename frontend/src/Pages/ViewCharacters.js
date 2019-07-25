import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import '../Styles/general.css'
const image = require('../Styles/character_icon.png')


class ViewCharacters extends Component {
    state = {
        characters: []
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:3000/characters/', {
            headers: { "Authorization": localStorage.getItem('token') }
        })
        const json = await response.json()
        this.setState({
            characters: json
        })
    }

    characterCard = (character, key) => {
        return (
            <Card className="display-cards" key={key} onClick={() => this.props.history.push(`/character/${character._id}`)}>
                <Image src={image} />
                <Card.Content>
                    <Card.Header>{character.name}</Card.Header>
                    <Card.Meta>{character.concept}</Card.Meta>
                    <Card.Meta>{character.faction}</Card.Meta>
                    <Card.Meta>{character.virtue}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }

    deployCharacters() {
        return this.state.characters.map((char, key) => this.characterCard(char, key))
    }

    render() {
        console.log(this.state)
        return (
            <Card.Group centered>
                {this.deployCharacters()}
            </Card.Group>
        )
    }
}

export default ViewCharacters