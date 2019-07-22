import React, { Component, Fragment } from 'react';
import { Table, Button } from 'semantic-ui-react'

class SkillTable extends Component {

    displayDots = (skill) => {
        let count = skill
        const arr = []
        do {
            arr.push(this.dot)
            count--
        } while (count > 0)
        return arr.map((i, key) => i(key))
    }

    dot(key) {
        return (
            <span key={key} className="dot"></span>
        )
    }

    renderTableRows = (bool) => {
        return Object.keys(this.props.skills).map((i, key) => {
            return (
                <Table.Row key={key}>
                    <Table.Cell>{i}</Table.Cell>
                    <Table.Cell>{this.displayDots(this.props.skills[i])}</Table.Cell>
                    {this.props.skills[i] === 5 ?
                        <Table.Cell>
                            <Button disabled={bool} size={"mini"} onClick={() => this.props.btnDec(i, this.props.skillType)}>-</Button>
                        </Table.Cell>
                        :
                        <Table.Cell>
                            <Button disabled={bool} size={"mini"} onClick={() => this.props.btnInc(i, this.props.skillType)}>+</Button>
                            <Button disabled={false} size={"mini"} onClick={() => this.props.btnDec(i, this.props.skillType)}>-</Button>
                        </Table.Cell>
                    }
                </Table.Row>
            )
        })
    }

    render() {
        console.log(this.props.allowance)
        return (
            <Fragment>
                <Table definition>
                    <Table.Body>
                        {this.props.allowance + 8 > this.props.spentPoints(this.props.skillType) ?
                            this.renderTableRows(false)
                            :                            
                            this.renderTableRows(true)
                        }
                    </Table.Body>
                </Table>
            </Fragment>
        )
    }
}

export default SkillTable