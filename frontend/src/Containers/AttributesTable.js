import React, { Component } from 'react';
import { Grid, Table } from 'semantic-ui-react';

class AttributesTable extends Component {

    render() {
        return (
            <Grid columns={3}>  
                <Grid.Column>
                    <Table definition>
                        <Table.Body>

                            <Table.Row>
                                <Table.Cell>Intelligence</Table.Cell>
                                <Table.Cell>{this.props.attributes.intelligence}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Wits</Table.Cell>
                                <Table.Cell>{this.props.attributes.wits}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Resolve</Table.Cell>
                                <Table.Cell>{this.props.attributes.resolve}</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                </Grid.Column>

                <Grid.Column>
                    <Table definition>
                        <Table.Body>

                            <Table.Row>
                                <Table.Cell>Strength</Table.Cell>
                                <Table.Cell>{this.props.attributes.strength}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Dexterity</Table.Cell>
                                <Table.Cell>{this.props.attributes.dexterity}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Stamina</Table.Cell>
                                <Table.Cell>{this.props.attributes.stamina}</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                </Grid.Column>

                <Grid.Column>
                    <Table definition>
                        <Table.Body>

                            <Table.Row>
                                <Table.Cell>Presence</Table.Cell>
                                <Table.Cell>{this.props.attributes.presence}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Manipulation</Table.Cell>
                                <Table.Cell>{this.props.attributes.manipulation}</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Composure</Table.Cell>
                                <Table.Cell>{this.props.attributes.composure}</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid>
        )
    }
}

export default AttributesTable