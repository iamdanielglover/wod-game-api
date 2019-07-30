import React, { Component, Fragment } from 'react'

class MeritsTable extends Component {
    state = {
        merits: []
    }

    componentDidMount = async () => {
        const response = await fetch('http://localhost:3000/characters/' + this.props.userId + "/merits", {
            headers: { "Authorization": localStorage.getItem('token') }
        })
        const array = await response.json()
        this.setState({
            merits: array
        })
    }

    populateMerits = () => {
        return this.state.merits.map(merit => {
            return (
                <li>{merit.name}</li>
            )
        })
    }

    render() {
        console.log(this.state)
        console.log(this.props.userId)
        return (
            <Fragment>
                <ul>
                    {this.populateMerits()}
                </ul>
            </Fragment>
        )
    }
}

export default MeritsTable 