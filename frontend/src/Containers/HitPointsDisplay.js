import React, { Component, Fragment } from 'react';

class HitPointsDisplay extends Component {
    state = {

    }

    render() {
        return (
            <Fragment>
                {this.props.hitpoints}
            </Fragment>
        )
    }
}

export default HitPointsDisplay