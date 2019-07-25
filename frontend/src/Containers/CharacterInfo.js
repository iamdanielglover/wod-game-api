import React, { Component, Fragment } from 'react';
import { Table, Grid } from 'semantic-ui-react';

class CharacterInfo extends Component {

    render() {
        return (
            <Fragment>
                <Grid columns={3}>
                    <Grid.Column>
                        <Table definition>
                            <Table.Body>

                                <Table.Row>
                                    <Table.Cell>Name</Table.Cell>
                                    <Table.Cell>{this.props.character.name}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Age</Table.Cell>
                                    <Table.Cell>{this.props.character.age}</Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table definition>
                            <Table.Body>

                                <Table.Row>
                                    <Table.Cell>Concept</Table.Cell>
                                    <Table.Cell>{this.props.character.concept}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Faction</Table.Cell>
                                    <Table.Cell>{this.props.character.faction}</Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table definition>
                            <Table.Body>

                                <Table.Row>
                                    <Table.Cell>Vice</Table.Cell>
                                    <Table.Cell>{this.props.character.vice}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Virtue</Table.Cell>
                                    <Table.Cell>{this.props.character.virtue}</Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid>
            </Fragment>
        )
    }
}

export default CharacterInfo