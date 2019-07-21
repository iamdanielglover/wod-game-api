import React, { Fragment, Component } from 'react'

class Options extends Component {

    setUpOptions = () => {
        return this.props.list.map((option, key) => {
            return <option key={key} value={option.text}>{option.text}</option>
        })
    }



    render() {
        return (
            <Fragment>
                {this.setUpOptions()}
            </Fragment>
        )
    }
}

export default Options