import React, { Component, Fragment } from 'react';
import { Grid, Table } from 'semantic-ui-react';
const capitalize = require('../Utils/Capitalize')

class SkillsTable extends Component {

    fillTable = (object) => {
        return Object.keys(object).map((i, key) => {
            return (
                <Table.Row key={key}>
                    <Table.Cell>{capitalize(i)}</Table.Cell>
                    <Table.Cell>{object[i]}</Table.Cell>
                </Table.Row>
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <Fragment>
                <Grid columns={3}>

                    <Grid.Column>
                        <Table definition>
                            <Table.Body>
                                {this.fillTable(this.props.mentals)}
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                    <Grid.Column>
                        <Table definition>
                            <Table.Body>
                                {this.fillTable(this.props.physicals)}
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                    <Grid.Column>
                        <Table definition>
                            <Table.Body>
                                {this.fillTable(this.props.socials)}
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                </Grid>
            </Fragment>
        )
    }
}

export default SkillsTable