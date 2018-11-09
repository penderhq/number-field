import React from 'react'
import NumberInput from './NumberInput'
import NumberLabel from './NumberLabel'

export default class NumberField extends React.Component {

    render() {

        const {contextId, roleId} = this.props


        if (contextId === 'recordDetail' && roleId === 'editor') {
            return (
                <NumberInput
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {
            return (
                <NumberLabel
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}