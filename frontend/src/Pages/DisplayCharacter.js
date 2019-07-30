import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import CharacterInfo from '../Containers/CharacterInfo'
import AttributesTable from '../Containers/AttributesTable';
import SkillsTable from '../Containers/SkillsTable';
import MeritsTable from '../Containers/MeritsTable';

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
                <Grid columns={2}>

                    <Grid.Column>
                        <AttributesTable attributes={{...this.state.character.attributes}}/>
                        <SkillsTable mentals={{...this.state.character.mentals}} physicals={{...this.state.character.physicals}} socials={{...this.state.character.socials}}/>
                    </Grid.Column>

                    <Grid.Column>
                        <MeritsTable userId={this.props.match.params.id}/>
                    </Grid.Column>

                </Grid>
            </Fragment>
        )   
    }
}

export default DisplayCharacter