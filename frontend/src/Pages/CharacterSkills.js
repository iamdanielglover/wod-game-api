import React, { Component, Fragment } from 'react';
import { Grid, Dimmer, Loader, Card, Button } from 'semantic-ui-react';
import SkillTable from '../Containers/SkillTable';
import characterPost from '../Utils/CharacterPost';

class CharacterSkills extends Component {
    state = {
        character: "", 
        loading: false
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:3000/characters/' + this.props.match.params.id, {
            headers: { "Authorization": localStorage.getItem('token') }
        })
        const json = await response.json()
        this.setState({
            character: json,
            loading: true,
            mentals: 4,
            physicals: 4,
            socials: 4,
            eleven: false,
            seven: false,
            four: false
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await characterPost(this.state.character.mentals, `http://localhost:3000/characters/${this.props.match.params.id}/mentals`, localStorage.getItem('token'))
        await characterPost(this.state.character.physicals, `http://localhost:3000/characters/${this.props.match.params.id}/physicals`, localStorage.getItem('token'))
        await characterPost(this.state.character.socials, `http://localhost:3000/characters/${this.props.match.params.id}/socials`, localStorage.getItem('token'))
        this.props.history.push(`/character/${this.state.character._id}`)
    }

    btnInc = (element, skillType) => {
        this.setState({
            character: {
                ...this.state.character,
                [skillType]: {
                    ...this.state.character[skillType],
                    [element]: parseInt(this.state.character[skillType][element]) + 1
                }
            }
        })
    }

    btnDec = (element, skillType) => {
        if (this.state.character[skillType][element] > 1) {
            this.setState({
                character: {
                    ...this.state.character,
                    [skillType]: {
                        ...this.state.character[skillType],
                        [element]: parseInt(this.state.character[skillType][element]) - 1
                    }
                }
            })
        }
    }

    spentPoints = (skillType) => {
        const a = this.state.character[skillType]
        let total = 0
        Object.keys(a).forEach(key => {
                total += a[key]
        })
        return total
    }

    handleAllowanceBtns = (event) => {
        if (parseInt(event.target.value) === 4) {
            this.setState({
                [event.target.name]: parseInt(event.target.value),
                four: !this.state.four
            })
        } else if (parseInt(event.target.value) === 7) {
            this.setState({
                [event.target.name]: parseInt(event.target.value),
                seven: !this.state.seven
            })
        } else if (parseInt(event.target.value) === 11) {
            this.setState({
                [event.target.name]: parseInt(event.target.value),
                eleven: !this.state.eleven
            })
        } else {
            console.log('nope')
        }
    }

    render() {
        console.log(this.state)
        return (
            <Fragment>
                {this.state.loading ?
                    <Fragment>
                        <Card centered>
                            <Card.Content>
                                <Card.Header textAlign={"center"} >{this.state.character.name}</Card.Header>
                            </Card.Content>
                        </Card>
                        <Grid columns={3}>
                            <Grid.Column>
                                <SkillTable skills={this.state.character.mentals} btnDec={this.btnDec} btnInc={this.btnInc} skillType={"mentals"} spentPoints={this.spentPoints} allowance={this.state.mentals} />
                                <div id="centered-button">
                                    <Button disabled={this.state.eleven} name="mentals" value={11} onClick={this.handleAllowanceBtns}>11</Button>
                                    <Button disabled={this.state.seven} name="mentals" value={7} onClick={this.handleAllowanceBtns}>7</Button>
                                    <Button disabled={this.state.four} name="mentals" value={4} onClick={this.handleAllowanceBtns}>4</Button>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <SkillTable skills={this.state.character.physicals} btnDec={this.btnDec} btnInc={this.btnInc} skillType={"physicals"} spentPoints={this.spentPoints} allowance={this.state.physicals} />
                                <div id="centered-button">
                                    <Button disabled={this.state.eleven} name="physicals" value={11} onClick={this.handleAllowanceBtns}>11</Button>
                                    <Button disabled={this.state.seven} name="physicals" value={7} onClick={this.handleAllowanceBtns}>7</Button>
                                    <Button disabled={this.state.four} name="physicals" value={4} onClick={this.handleAllowanceBtns}>4</Button>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <SkillTable skills={this.state.character.socials} btnDec={this.btnDec} btnInc={this.btnInc} skillType={"socials"} spentPoints={this.spentPoints} allowance={this.state.socials} />
                                <div id="centered-button">
                                    <Button disabled={this.state.eleven} name="socials" value={11} onClick={this.handleAllowanceBtns}>11</Button>
                                    <Button disabled={this.state.seven} name="socials" value={7} onClick={this.handleAllowanceBtns}>7</Button>
                                    <Button disabled={this.state.four} name="socials" value={4} onClick={this.handleAllowanceBtns}>4</Button>
                                </div>
                            </Grid.Column>
                        </Grid>
                        <div id="centered-button"><Button onClick={this.handleSubmit}>Finished</Button></div>
                    </Fragment>
                    :
                    <Dimmer>
                        <Loader />
                    </Dimmer>
                }

            </Fragment>           
        )
    }
}

export default CharacterSkills