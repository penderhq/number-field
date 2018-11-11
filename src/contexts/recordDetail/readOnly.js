import React from 'react'

export default class NumberLabel extends React.Component {

    render() {

        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}