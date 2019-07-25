import React, { Component, Fragment } from 'react';
// import { Grid } from 'semantic-ui-react';
import CharacterInfo from '../Containers/CharacterInfo'
import AttributesTable from '../Containers/AttributesTable';
import SkillsTable from '../Containers/SkillsTable'

class DisplayCharacter extends Component {
    state = {
        character: "",
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:3000/characters/' + this.props.match.params.id, {
            headers: { "Authorization": localStorage.getItem('token') }
        })
        const json = await response.json()
        this.setState({
            character: json,
            hitpoints: parseInt(json.size) + parseInt(json.attributes.stamina)
        })
    }

    render() {
        return (
            <Fragment>
                <CharacterInfo character={this.state.character} />
                <AttributesTable attributes={{...this.state.character.attributes}}/>
                <SkillsTable mentals={{...this.state.character.mentals}} physicals={{...this.state.character.physicals}} socials={{...this.state.character.socials}}/>
            </Fragment>
        )   
    }
}

export default DisplayCharacter